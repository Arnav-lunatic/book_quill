import Database from "better-sqlite3";
import path from "node:path";
import {app} from 'electron';

class AppDatabase {
	constructor() {
		const dbPath = path.join(app.getPath("userData"), "book-quill.sqlite");
		this.db = new Database(dbPath);
        this.db.pragma("journal_mode = WAL");
        this.setUpDatabase();
    }
    
    setUpDatabase() {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                isCompleted INTEGER NOT NULL DEFAULT 0
            )
            `)
    }

    addTask(title) {
        const stmt = this.db.prepare('INSERT INTO tasks (title) VALUES (?)');
        const info = stmt.run(title);

        return {
            id: info.lastInsertRowid,
            title: title,
            complete: 0
        }
    }

    deleteTask(id) {
        const stmt = this.db.prepare('DELETE FROM tasks WHERE id = ?')
        const info = stmt.run(id);
        return info.changes > 0;
    }

    markComplete(id, isCompleted) {
        const stmt = this.db.prepare('UPDATE tasks SET isCompleted = ? WHERE id = ?');
        const info = stmt.run(isCompleted, id);
        return info.changes > 0;
    }

    getAllTask() {
        const stmt = this.db.prepare('SELECT * FROM tasks ORDER BY id DESC');
        return stmt.all();
    }

}

export default AppDatabase;
