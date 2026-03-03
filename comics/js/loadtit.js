// haha load tit laugh

const page = document.querySelector('.awesometainer > div:not(.scaryhidden)');
const postTitleEl = page?.querySelector('.pagename');
const postTitle = postTitleEl?.textContent?.trim();

if (postTitle) {
	const titleee = document.title;
	document.title = `${postTitle} – ${titleee}`;
}