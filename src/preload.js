// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("books", {
	addBook: (title) => ipcRenderer.invoke("books:add", title),

	deleteBook: (id) => ipcRenderer.invoke("books:delete", id),

	getAllBook: () => ipcRenderer.invoke("books:getAll"),

	addTask: (task, book_id) => ipcRenderer.invoke("tasks:add", task, book_id),

	markChecked: (id, isComplete) =>
		ipcRenderer.invoke("tasks:markChecked", id, isComplete),

	deleteTask: (id) => ipcRenderer.invoke("tasks:delete", id),

	getAllTasksFromBook: (book_id) =>
		ipcRenderer.invoke("tasks:getAllFromBook", book_id),
});
