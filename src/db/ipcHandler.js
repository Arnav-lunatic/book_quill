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

    ipcMain.handle("tasks:add", (_, task, book_id) => {
        return db.addTask(task, book_id);
    })

    ipcMain.handle("tasks:markChecked", (_, id, isChecked) => {
        return db.markChecked(id, isChecked);
    })

    ipcMain.handle("tasks:delete", (_, id) => {
        return db.deleteTask(id);
    })

    ipcMain.handle("tasks:getAllFromBook", (_, book_id) => {
        return db.getAllTasksFromBook(book_id);
    })
}