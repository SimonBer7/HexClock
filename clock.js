

function SetData() {
	var datum = new Date();

	var hodiny = datum.getHours();
	var minuty = datum.getMinutes();
	var sekundy = datum.getSeconds();

	if (hodiny < 10) { hodiny = "0" + hodiny };
	if (minuty < 10) { minuty = "0" + minuty };
	if (sekundy < 10) { sekundy = "0" + sekundy };

	var barva = "#" + hodiny + "" + minuty + "" + sekundy;

	document.querySelector("body").style.backgroundColor = barva;
	document.querySelector("p").innerHTML = barva;
	document.querySelector("span").innerHTML = hodiny + ":" + minuty + ":" + sekundy;

};

setInterval(SetData, 1000);
