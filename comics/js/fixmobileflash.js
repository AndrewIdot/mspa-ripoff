const container = document.getElementById("rufflecontainerformobilefuckoff");
const embed = container.querySelector("embed");

if (window.matchMedia("(max-width: 480px)").matches) {
	if (embed) {
		const w = embed.getAttribute("width");
		const h = embed.getAttribute("height");

		if (w && h) {
			container.style.aspectRatio = `${w} / ${h}`;
		}
	}
}