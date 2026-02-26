import { ipcMain } from 'electron';

export default function setupHandlers(db) {
    ipcMain.handle("books:add", (_, title) => {
        return db.addBook(title);
    })

    ipcMain.handle("books:delete", (_, id) => {
        return db.deleteBook(id);
    })

    ipcMain.handle("books:getAll", () => {
        return db.getAllBooks();
    })

    ipcMain.handle("tasks:add", (_, title, description, book_id) => {
        return db.addTask(title, description, book_id);
    })

    ipcMain.handle("tasks:markComplete", (_, id, isCompleted) => {
        return db.markComplete(id, isCompleted);
    })

    ipcMain.handle("tasks:delete", (_, id) => {
        return db.deleteTask(id);
    })

    ipcMain.handle("tasks:getAll", () => {
        return db.getAllTasks();
    })
}