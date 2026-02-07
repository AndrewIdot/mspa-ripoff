var params = new URLSearchParams(document.location.search);
var p = params.get("p");
p = Number(p);

if (!p) {
	p = 1;
}

document.getElementById(`page${p}`).className = "";

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

removeElementsByClass("scaryhidden");

var yourElement = document.getElementById('gobackpage');
yourElement.setAttribute('href', '?p=' + (p - 1));

var yourElementp = document.getElementById('gofrontpage');
yourElementp.setAttribute('href', '?p=' + (p + 1));