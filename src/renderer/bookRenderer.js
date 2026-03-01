import { showTooltip } from "./uiHelpers.js";

function openBook(book) {
	let overlay = document.querySelector(".open-book-overlay");

	if (!overlay) {
		overlay = document.createElement("div");
		overlay.className = "open-book-overlay";
		overlay.innerHTML = `
			<div class="open-book-content">
				<h2 class="open-book-title">${book.name}</h2>
				<img
					src="/minecraft_open_book.png"
					alt="Open book"
					class="open-book-image"
				/>
				<div class="open-book-close mc-button">
					<div class="title">Close</div>
				</div>
			</div>
		`;
		document.body.appendChild(overlay);

		const closeBtn = overlay.querySelector(".open-book-close");
		closeBtn.addEventListener("click", () => {
			overlay.remove();
		});

		overlay.addEventListener("click", (event) => {
			if (event.target === overlay) {
				overlay.remove();
			}
		});
	}
}

function renderBookPixels(book, bookPixels, pixelColors) {
	for (let i = 0; i < bookPixels.length; i++) {
		bookPixels[i].style.backgroundColor = pixelColors[i];
	}

	bookPixels.forEach((pixel) => {
		pixel.addEventListener("click", () => {
			openBook(book);
		});
	});

	showTooltip(book.name, bookPixels[5], bookPixels);
}
function renderFirstBook(book) {
	const bookPixels = [
		document.querySelector(".pixel34"),
		document.querySelector(".pixel35"),
		document.querySelector(".pixel36"),
		document.querySelector(".pixel37"),
		document.querySelector(".pixel50"),
		document.querySelector(".pixel51"),
		document.querySelector(".pixel52"),
		document.querySelector(".pixel53"),
		document.querySelector(".pixel66"),
		document.querySelector(".pixel67"),
		document.querySelector(".pixel68"),
		document.querySelector(".pixel69"),
		document.querySelector(".pixel82"),
		document.querySelector(".pixel83"),
		document.querySelector(".pixel84"),
		document.querySelector(".pixel85"),
		document.querySelector(".pixel98"),
		document.querySelector(".pixel99"),
		document.querySelector(".pixel100"),
		document.querySelector(".pixel101"),
	];

	const pixelColors = [
		"#0F5252",
		"#168585",
		"#106161",
		"#0F5252",
		"#106161",
		"#229494",
		"#106161",
		"#0F5252",
		"#913314",
		"#F2C958",
		"#C38F00",
		"#6A250F",
		"#6A250F",
		"#C38F00",
		"#856200",
		"#6A250F",
		"#106161",
		"#168585",
		"#106161",
		"#0F5252",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

function renderSecondBook(book) {
	const bookPixels = [
		document.querySelector(".pixel23"),
		document.querySelector(".pixel24"),
		document.querySelector(".pixel25"),
		document.querySelector(".pixel26"),
		document.querySelector(".pixel39"),
		document.querySelector(".pixel40"),
		document.querySelector(".pixel41"),
		document.querySelector(".pixel42"),
		document.querySelector(".pixel55"),
		document.querySelector(".pixel56"),
		document.querySelector(".pixel57"),
		document.querySelector(".pixel58"),
		document.querySelector(".pixel71"),
		document.querySelector(".pixel72"),
		document.querySelector(".pixel73"),
		document.querySelector(".pixel74"),
		document.querySelector(".pixel87"),
		document.querySelector(".pixel88"),
		document.querySelector(".pixel89"),
		document.querySelector(".pixel90"),
		document.querySelector(".pixel103"),
		document.querySelector(".pixel104"),
		document.querySelector(".pixel105"),
		document.querySelector(".pixel106"),
	];

	const pixelColors = [
		"#40611F",
		"#40611F",
		"#324F17",
		"#324F17",
		"#40611F",
		"#57852A",
		"#40611F",
		"#324F17",
		"#57852A",
		"#6B9E3A",
		"#40611F",
		"#324F17",
		"#C38F00",
		"#856200",
		"#C38F00",
		"#F2C958",
		"#57852A",
		"#6B9E3A",
		"#40611F",
		"#324F17",
		"#40611F",
		"#57852A",
		"#40611F",
		"#324F17",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

function renderThirdBook(book) {
	const bookPixels = [
		document.querySelector(".pixel28"),
		document.querySelector(".pixel29"),
		document.querySelector(".pixel30"),
		document.querySelector(".pixel31"),
		document.querySelector(".pixel44"),
		document.querySelector(".pixel45"),
		document.querySelector(".pixel46"),
		document.querySelector(".pixel47"),
		document.querySelector(".pixel60"),
		document.querySelector(".pixel61"),
		document.querySelector(".pixel62"),
		document.querySelector(".pixel63"),
		document.querySelector(".pixel76"),
		document.querySelector(".pixel77"),
		document.querySelector(".pixel78"),
		document.querySelector(".pixel79"),
		document.querySelector(".pixel92"),
		document.querySelector(".pixel93"),
		document.querySelector(".pixel94"),
		document.querySelector(".pixel95"),
		document.querySelector(".pixel108"),
		document.querySelector(".pixel109"),
		document.querySelector(".pixel110"),
		document.querySelector(".pixel111"),
	];

	const pixelColors = [
		"#4B1F67",
		"#4B1F67",
		"#351C46",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#49265F",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#49265F",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#49265F",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#49265F",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
		"#49265F",
		"#672B8E",
		"#7A31A7",
		"#4B1F67",
		"#351C46",
		"#8E3BC2",
		"#A743E5",
		"#672B8E",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

function renderForthBook(book) {
	const bookPixels = [
		document.querySelector(".pixel146"),
		document.querySelector(".pixel147"),
		document.querySelector(".pixel148"),
		document.querySelector(".pixel149"),
		document.querySelector(".pixel162"),
		document.querySelector(".pixel163"),
		document.querySelector(".pixel164"),
		document.querySelector(".pixel165"),
		document.querySelector(".pixel178"),
		document.querySelector(".pixel179"),
		document.querySelector(".pixel180"),
		document.querySelector(".pixel181"),
		document.querySelector(".pixel194"),
		document.querySelector(".pixel195"),
		document.querySelector(".pixel196"),
		document.querySelector(".pixel197"),
		document.querySelector(".pixel210"),
		document.querySelector(".pixel211"),
		document.querySelector(".pixel212"),
		document.querySelector(".pixel213"),
		document.querySelector(".pixel226"),
		document.querySelector(".pixel227"),
		document.querySelector(".pixel228"),
		document.querySelector(".pixel229"),
	];

	const pixelColors = [
		"#802A41",
		"#912F49",
		"#802A41",
		"#802A41",
		"#802A41",
		"#B63C5C",
		"#912F49",
		"#802A41",
		"#C38F00",
		"#856200",
		"#C38F00",
		"#F2C958",
		"#B63C5C",
		"#D44A6E",
		"#B63C5C",
		"#802A41",
		"#B63C5C",
		"#D44A6E",
		"#B63C5C",
		"#802A41",
		"#912F49",
		"#B63C5C",
		"#912F49",
		"#802A41",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

function renderFifthBook(book) {
	const bookPixels = [
		document.querySelector(".pixel167"),
		document.querySelector(".pixel168"),
		document.querySelector(".pixel169"),
		document.querySelector(".pixel170"),
		document.querySelector(".pixel183"),
		document.querySelector(".pixel184"),
		document.querySelector(".pixel185"),
		document.querySelector(".pixel186"),
		document.querySelector(".pixel199"),
		document.querySelector(".pixel200"),
		document.querySelector(".pixel201"),
		document.querySelector(".pixel202"),
		document.querySelector(".pixel215"),
		document.querySelector(".pixel216"),
		document.querySelector(".pixel217"),
		document.querySelector(".pixel218"),
		document.querySelector(".pixel231"),
		document.querySelector(".pixel232"),
		document.querySelector(".pixel233"),
		document.querySelector(".pixel234"),
	];

	const pixelColors = [
		"#814834",
		"#8B533F",
		"#5E3426",
		"#502D20",
		"#814834",
		"#8B533F",
		"#5E3426",
		"#502D20",
		"#C38F00",
		"#856200",
		"#C38F00",
		"#F2C958",
		"#814834",
		"#8B533F",
		"#5E3426",
		"#502D20",
		"#5E3426",
		"#814834",
		"#5E3426",
		"#502D20",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

function renderSixthBook(book) {
	const bookPixels = [
		document.querySelector(".pixel156"),
		document.querySelector(".pixel157"),
		document.querySelector(".pixel158"),
		document.querySelector(".pixel159"),
		document.querySelector(".pixel172"),
		document.querySelector(".pixel173"),
		document.querySelector(".pixel174"),
		document.querySelector(".pixel175"),
		document.querySelector(".pixel188"),
		document.querySelector(".pixel189"),
		document.querySelector(".pixel190"),
		document.querySelector(".pixel191"),
		document.querySelector(".pixel204"),
		document.querySelector(".pixel205"),
		document.querySelector(".pixel206"),
		document.querySelector(".pixel207"),
		document.querySelector(".pixel220"),
		document.querySelector(".pixel221"),
		document.querySelector(".pixel222"),
		document.querySelector(".pixel223"),
		document.querySelector(".pixel236"),
		document.querySelector(".pixel237"),
		document.querySelector(".pixel238"),
		document.querySelector(".pixel239"),
	];

	const pixelColors = [
		"#112A4F",
		"#112A4F",
		"#0B2245",
		"#0B2245",
		"#18396C",
		"#1D427B",
		"#112A4F",
		"#0B2245",
		"#913314",
		"#F2C958",
		"#C38F00",
		"#6A250F",
		"#6A250F",
		"#C38F00",
		"#856200",
		"#6A250F",
		"#18396C",
		"#1D427B",
		"#112A4F",
		"#0B2245",
		"#112A4F",
		"#112A4F",
		"#0B2245",
		"#0B2245",
	];

	renderBookPixels(book, bookPixels, pixelColors);
}

export {
	renderFirstBook,
	renderSecondBook,
	renderThirdBook,
	renderForthBook,
	renderFifthBook,
	renderSixthBook,
};
