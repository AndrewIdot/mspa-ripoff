function skinningmydick(name) {
	document.getElementById("skin").href = "css/skins/" + name + ".css";
	localStorage.setItem("skin", name);
}

const saved = localStorage.getItem("skin");
if (saved) skinningmydick(saved);