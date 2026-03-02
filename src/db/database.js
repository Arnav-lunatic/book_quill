import Database from "better-sqlite3";
import path from "node:path";
import { app } from "electron";

class AppDatabase {
	constructor() {
		const dbPath = path.join(app.getPath("userData"), "book-quill.sqlite");
		this.db = new Database(dbPath);
		this.db.pragma("journal_mode = WAL");
		this.setUpBookshelf();
	}
	setUpBookshelf() {
		this.db.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                date_time DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL,
                isChecked BOOLEAN DEFAULT 0,
                date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
                book_id INTEGER NOT NULL,

                FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
            );
            `);
	}

	addBook(book_name) {
		const stmt = this.db.prepare("INSERT INTO books (name) VALUES (?)");
		const info = stmt.run(book_name);
		return {
			id: info.lastInsertRowid,
			name: book_name,
			date_time: info.date_time,
		};
	}

	deleteBook(id) {
		const stmt = this.db.prepare("DELETE FROM books WHERE id = ?");
		const info = stmt.run(id);
		return info.changes > 0;
	}

	getAllBooks() {
		const stmt = this.db.prepare("SELECT * FROM books ORDER BY id DESC");
		return stmt.all();
	}

	addTask(task, book_id) {
		const stmt = this.db.prepare(
			"INSERT INTO tasks (task, book_id) VALUES (?, ?)",
		);
		const info = stmt.run(task , book_id);
		return {
			id: info.lastInsertRowid,
			task: task,
			isChecked: 0,
			date_time: info.date_time,
			book_id: book_id,
		};
	}

	markChecked(id, isChecked) {
		const stmt = this.db.prepare(
			"UPDATE tasks SET isChecked = ? WHERE id = ?",
		);
		const info = stmt.run(isChecked, id);
		return info.changes > 0;
	}

	deleteTask(id) {
		const stmt = this.db.prepare("DELETE FROM tasks WHERE id = ?");
		const info = stmt.run(id);

		return info.changes > 0;
	}

	getAllTasksFromBook(book_id) {
		const stmt = this.db.prepare(
			"SELECT * FROM tasks WHERE book_id = ? ORDER BY id DESC",
		);
		return stmt.all(book_id);
	}

	closeDB() {
		this.db.close();
	}
}

export default AppDatabase;
