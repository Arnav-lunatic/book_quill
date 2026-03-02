import { renderBooks, addBookPopUp, deleteBookPopup } from "./bookRenderer.js";

const bookshelf = document.querySelector(".bookshelf");
const addBookBtn = document.querySelector(".addBook");
const delBookBtn = document.querySelector(".delBook");

for (let i = 1; i <= 256; i++) {
	const div = document.createElement("div");
	div.className = `pixel${i}`;
	div.id = "pixel";
	bookshelf.appendChild(div);
}

renderBooks();

addBookBtn.addEventListener("click", addBookPopUp);

delBookBtn.addEventListener("click", deleteBookPopup);
