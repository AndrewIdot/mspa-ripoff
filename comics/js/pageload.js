var params = new URLSearchParams(document.location.search);
var p = params.get("p");

document.getElementById(`page${p}`).className = "";

document.getElementsByClassName("scaryhidden").remove();