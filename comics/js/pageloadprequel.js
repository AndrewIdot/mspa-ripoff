var params = new URLSearchParams(document.location.search);
var p = params.get("p");
p = Number(p);

if (!p) {
	p = 1;
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

if (p) {
    var pageElement = document.getElementById(`page${p}`);
    if (pageElement) {
        pageElement.className = "";
    }
	else {
		document.getElementById('notfound').style.display = '';
	}
}

removeElementsByClass("scaryhidden");

var yourElement = document.getElementById('previous');
yourElement.setAttribute('href', '?p=' + (p - 1));

var yourElementp = document.getElementById('next');
yourElementp.setAttribute('href', '?p=' + (p + 1));

var yourElementp1 = document.getElementById('next1');
yourElementp1.setAttribute('href', '?p=' + (p + 1));

if (p == 1) {
	removeElementsByClass("previous");
}

const logocount = 9;
const dumbbullshit = Math.floor(Math.random() * logocount) + 1;
document.getElementById('header-container').style.backgroundImage = `url('images/prequel/website/header${dumbbullshit}.jpg')`;