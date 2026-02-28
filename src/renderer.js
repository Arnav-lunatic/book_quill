const bookshelf = document.querySelector(".bookshelf");
for (let i = 1; i <= 256; i++) {
	const div = document.createElement("div");
	div.className = `pixel${i}`;
	div.id = "pixel";
	bookshelf.appendChild(div);
}

function renderFirstBook() {
	document.querySelector(".pixel34").style.backgroundColor = "#0F5252";
	document.querySelector(".pixel35").style.backgroundColor = "#168585";
	document.querySelector(".pixel36").style.backgroundColor = "#106161";
	document.querySelector(".pixel37").style.backgroundColor = "#0F5252";

	document.querySelector(".pixel50").style.backgroundColor = "#106161";
	document.querySelector(".pixel51").style.backgroundColor = "#229494";
	document.querySelector(".pixel52").style.backgroundColor = "#106161";
	document.querySelector(".pixel53").style.backgroundColor = "#0F5252";

	document.querySelector(".pixel66").style.backgroundColor = "#913314";
	document.querySelector(".pixel67").style.backgroundColor = "#F2C958";
	document.querySelector(".pixel68").style.backgroundColor = "#C38F00";
	document.querySelector(".pixel69").style.backgroundColor = "#6A250F";

	document.querySelector(".pixel82").style.backgroundColor = "#6A250F";
	document.querySelector(".pixel83").style.backgroundColor = "#C38F00";
	document.querySelector(".pixel84").style.backgroundColor = "#856200";
	document.querySelector(".pixel85").style.backgroundColor = "#6A250F";

	document.querySelector(".pixel98").style.backgroundColor = "#106161";
	document.querySelector(".pixel99").style.backgroundColor = "#168585";
	document.querySelector(".pixel100").style.backgroundColor = "#106161";
	document.querySelector(".pixel101").style.backgroundColor = "#0F5252";
}

function renderSecondBook() {
	document.querySelector(".pixel23").style.backgroundColor = "#40611F";
	document.querySelector(".pixel24").style.backgroundColor = "#40611F";
	document.querySelector(".pixel25").style.backgroundColor = "#324F17";
	document.querySelector(".pixel26").style.backgroundColor = "#324F17";

	document.querySelector(".pixel39").style.backgroundColor = "#40611F";
	document.querySelector(".pixel40").style.backgroundColor = "#57852A";
	document.querySelector(".pixel41").style.backgroundColor = "#40611F";
	document.querySelector(".pixel42").style.backgroundColor = "#324F17";

	document.querySelector(".pixel55").style.backgroundColor = "#57852A";
	document.querySelector(".pixel56").style.backgroundColor = "#6B9E3A";
	document.querySelector(".pixel57").style.backgroundColor = "#40611F";
	document.querySelector(".pixel58").style.backgroundColor = "#324F17";

	document.querySelector(".pixel71").style.backgroundColor = "#C38F00";
	document.querySelector(".pixel72").style.backgroundColor = "#856200";
	document.querySelector(".pixel73").style.backgroundColor = "#C38F00";
	document.querySelector(".pixel74").style.backgroundColor = "#F2C958";

	document.querySelector(".pixel87").style.backgroundColor = "#57852A";
	document.querySelector(".pixel88").style.backgroundColor = "#6B9E3A";
	document.querySelector(".pixel89").style.backgroundColor = "#40611F";
	document.querySelector(".pixel90").style.backgroundColor = "#324F17";

	document.querySelector(".pixel103").style.backgroundColor = "#40611F";
	document.querySelector(".pixel104").style.backgroundColor = "#57852A";
	document.querySelector(".pixel105").style.backgroundColor = "#40611F";
	document.querySelector(".pixel106").style.backgroundColor = "#324F17";
}

function renderThirdBook() {
	document.querySelector(".pixel28").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel29").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel30").style.backgroundColor = "#351C46";
	document.querySelector(".pixel31").style.backgroundColor = "#351C46";


	document.querySelector(".pixel44").style.backgroundColor = "#8E3BC2";
	document.querySelector(".pixel45").style.backgroundColor = "#A743E5";
	document.querySelector(".pixel46").style.backgroundColor = "#672B8E";
	document.querySelector(".pixel47").style.backgroundColor = "#49265F";


	document.querySelector(".pixel60").style.backgroundColor = "#672B8E";
	document.querySelector(".pixel61").style.backgroundColor = "#7A31A7";
	document.querySelector(".pixel62").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel63").style.backgroundColor = "#351C46";

	document.querySelector(".pixel76").style.backgroundColor = "#672B8E";
	document.querySelector(".pixel77").style.backgroundColor = "#7A31A7";
	document.querySelector(".pixel78").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel79").style.backgroundColor = "#351C46";

	document.querySelector(".pixel92").style.backgroundColor = "#8E3BC2";
	document.querySelector(".pixel93").style.backgroundColor = "#A743E5";
	document.querySelector(".pixel94").style.backgroundColor = "#672B8E";
	document.querySelector(".pixel95").style.backgroundColor = "#49265F";

	document.querySelector(".pixel108").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel109").style.backgroundColor = "#4B1F67";
	document.querySelector(".pixel110").style.backgroundColor = "#351C46";
	document.querySelector(".pixel111").style.backgroundColor = "#351C46";
};

function renderForthBook(){
	
}

renderFirstBook();
renderSecondBook();
renderThirdBook();