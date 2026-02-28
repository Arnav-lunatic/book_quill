import {
	renderFirstBook,
	renderSecondBook,
	renderThirdBook,
	renderForthBook,
	renderFifthBook,
	renderSixthBook,
} from "./bookRenderer.js";

const bookshelf = document.querySelector(".bookshelf");
const addBookBtn = document.querySelector(".addBook");
const delBookBtn = document.querySelector(".delBook");

for (let i = 1; i <= 256; i++) {
	const div = document.createElement("div");
	div.className = `pixel${i}`;
	div.id = "pixel";
	bookshelf.appendChild(div);
}

async function getAllBooks() {
	const books = await window.books.getAllBook();
	console.log(books);
	return books;
}

async function renderBooks() {
	const books = await getAllBooks();
	switch (books.length) {
		case 1:
			renderFirstBook(books[0].name);
			break;
		case 2:
			renderFirstBook(books[1].name);
			renderSecondBook(books[0].name);
			break;
		case 3:
			renderFirstBook(books[2].name);
			renderSecondBook(books[1].name);
			renderThirdBook(books[0].name);
			break;
		case 4:
			renderFirstBook(books[3].name);
			renderSecondBook(books[2].name);
			renderThirdBook(books[1].name);
			renderForthBook(books[0].name);
			break;
		case 5:
			renderFirstBook(books[4].name);
			renderSecondBook(books[3].name);
			renderThirdBook(books[2].name);
			renderForthBook(books[1].name);
			renderFifthBook(books[0].name);
			break;
		case 6:
			renderFirstBook(books[5].name);
			renderSecondBook(books[4].name);
			renderThirdBook(books[3].name);
			renderForthBook(books[2].name);
			renderFifthBook(books[1].name);
			renderSixthBook(books[0].name);
			break;
	}
}

renderBooks();

addBookBtn.addEventListener("click", async () => {
	const popup = document.createElement("div");
	popup.className = "popup-bg";
	popup.innerHTML = `
		<div class="popup">
			<div class="popup-title">Add New Book</div>
			<input type="text" class="popup-input" placeholder="Book Title" autofocus />
			<div class="popup-actions">
				<div class="popup-ok mc-button"><div class="title">OK</div></div>
				<div class="popup-cancel mc-button"><div class="title">Cancel</div></div>
			</div>
		</div>
	`;
	document.body.appendChild(popup);
	const input = popup.querySelector(".popup-input");
	const okBtn = popup.querySelector(".popup-ok");
	const cancelBtn = popup.querySelector(".popup-cancel");
	okBtn.addEventListener("click", async () => {
		const title = input.value.trim();
		if (title) {
			await window.books.addBook(title);
			renderBooks();
			document.body.removeChild(popup);
		} else {
			input.focus();
		}
	});
	cancelBtn.addEventListener("click", () => {
		document.body.removeChild(popup);
	});
	input.addEventListener("keydown", (e) => {
		if (e.key === "Enter") okBtn.click();
		if (e.key === "Escape") cancelBtn.click();
	});
});

delBookBtn.addEventListener("click", async () => {
	const books = (await getAllBooks()).reverse();

	const popup = document.createElement("div");
	popup.className = "popup-bg";
	popup.innerHTML = `
    <div class="popup">
		<div class="popup-title">Delete Book</div>
		<div class="popup-list">
        ${
			books.length === 0
				? "<div>No books available.</div>"
				: books
						.map(
							(book) => `
		<div class="popup-book-item">
            <span>${book.name}</span>
            <div class="popup-delete mc-button" data-idx="${book.id}">
				<div class="title">Delete</div>
			</div>
        </div>
        `,
						)
						.join("")
		}
    </div>
    <div class="popup-actions">
        <div class="popup-cancel mc-button">
			<div class="title">Cancel</div>
		</div>
    </div>
    </div>
	`;
	document.body.appendChild(popup);
	const cancelBtn = popup.querySelector(".popup-cancel");
	cancelBtn.addEventListener("click", () => {
		document.body.removeChild(popup);
	});
	popup.querySelectorAll(".popup-delete").forEach((btn) => {
		btn.addEventListener("click", async () => {
			const id = btn.getAttribute("data-idx");

			await window.books.deleteBook(id);
			document.body.removeChild(popup);
			renderBooks();
		});
	});
});
