function showTooltip(text, target, bookPixel) {
	bookPixel.forEach((pixel) => {
		pixel.addEventListener("mouseenter", function () {
			let tooltip = document.createElement("div");
			tooltip.className = "book-tooltip";
			tooltip.textContent = text;
			document.body.appendChild(tooltip);
			const rect = target.getBoundingClientRect();
			tooltip.style.left =
				rect.left + window.scrollX + rect.width / 2 + "px";
			tooltip.style.top = rect.top + window.scrollY - 32 + "px";
		});
		pixel.addEventListener("mouseleave", function () {
			const tooltip = document.querySelector(".book-tooltip");
			if (tooltip) tooltip.remove();
		});
	});
}

function hideTooltip() {
	const tooltip = document.querySelector(".book-tooltip");
	if (tooltip) tooltip.remove();
}

export { showTooltip, hideTooltip };