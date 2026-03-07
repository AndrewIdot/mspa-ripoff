// haha load tit laugh

const page = document.querySelector('.awesometainer > div:not(.scaryhidden)');
const postTitleEl = page?.querySelector('.pagename');
const postTitle = postTitleEl?.textContent?.trim();
const titleee = document.title;

if (postTitle) {
	document.title = `${postTitle} – ${titleee}`;
}

const container = document.getElementById("rufflecontainerformobilefuckoff");
const embed = container.querySelector("embed");

if (embed) {
    const w = embed.getAttribute("width");
    const h = embed.getAttribute("height");

    if (w && h) {
        container.style.aspectRatio = `${w} / ${h}`;
    }
}