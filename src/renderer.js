const bookshelf = document.querySelector(".bookshelf");
for (let i = 1; i <= 256; i++) {
	const div = document.createElement("div");
	div.className = `pixel${i}`;
	div.id = "pixel";
	bookshelf.appendChild(div);
}
