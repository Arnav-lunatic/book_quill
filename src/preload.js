// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("books", {
    addBook: (title) => ipcRenderer.invoke("books:add", title),
    
    deleteBook: (id) => ipcRenderer.invoke("books:delete", id),
    
    getAllBook: () => ipcRenderer.invoke("books:getAll"),
    
	addTask: (title, description, book_id) =>
		ipcRenderer.invoke("tasks:add", title, description, book_id),
	markComplete: (id, isComplete) =>
        ipcRenderer.invoke("tasks:markComplete", id, isComplete),
    
    deleteTasks: (id) => ipcRenderer.invoke("tasks:delete", id),
    
	getAllTasks: () => ipcRenderer.invoke("tasks:getAll"),
});
