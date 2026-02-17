var params = new URLSearchParams(document.location.search);
var f = params.get("f");
f = Number(f);

if (!f) {
	f = 1;
}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

if (f) {
    var pageElement = document.getElementById(`flash${f}`);
    if (pageElement) {
        pageElement.className = "";
    }
	else {
		document.getElementById('notfound').style.display = '';
	}
}

removeElementsByClass("scaryhidden");