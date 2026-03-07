// haha load tit laugh

const page = document.querySelector('.awesometainer > div:not(.scaryhidden)');
const postTitleEl = page?.querySelector('.pagename');
const postTitle = postTitleEl?.textContent?.trim();
const titleee = document.title;

if (postTitle) {
	document.title = `${postTitle} – ${titleee}`;
}