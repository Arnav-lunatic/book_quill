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
                title TEXT NOT NULL,
                isChecked BOOLEAN DEFAULT 0,
                description TEXT,
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

	addTask(title, description, book_id) {
		const stmt = this.db.prepare(
			"INSERT INTO tasks (title, description, book_id) VALUES (?, ?, ?)",
		);
		const info = stmt.run(title, description, book_id);
		return {
			id: info.lastInsertRowid,
			title,
			description,
			isChecked: 0,
			date_time: info.date_time,
			book_id,
		};
	}

	markComplete(id, isCompleted) {
		const stmt = this.db.prepare(
			"UPDATE tasks SET isCompleted = ? WHERE id = ?",
		);
		const info = stmt.run(isCompleted, id);
		return info.changes > 0;
	}

	deleteTask(id) {
        const stmt = this.db.prepare("DELETE FROM tasks WHERE id = ?");
        const info = stmt.run(id);

        return info.changes > 0;
	}

    getAllTasks() {
        const stmt = this.db.prepare("SELECT * FROM tasks ORDER BY id DESC");
        return stmt.all();
    }

    closeDB() {
        this.db.close();
    }
}

export default AppDatabase;
