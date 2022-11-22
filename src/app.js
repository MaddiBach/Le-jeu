import { Guerrier } from "./Guerrier.js";
import { Mage } from "./Mage.js";
import { Tank } from "./Tank.js";
import { changedisplaywithid, changevaluewithid } from "./Ui.js";
let j1 = null;
let j2 = null;
let tour = 1;

document.getElementById("mage").addEventListener("click", () => setj1("Mage"));
document
	.getElementById("guerrier")
	.addEventListener("click", () => setj1("Guerrier"));
document.getElementById("tank").addEventListener("click", () => setj1("Tank"));

document.getElementById("1").addEventListener("click", () => playturn(1));
document.getElementById("2").addEventListener("click", () => playturn(2));
document.getElementById("3").addEventListener("click", () => playturn(3));
document.getElementById("4").addEventListener("click", () => playturn(4));

changedisplaywithid("jeu", "none");

function playturn(choice) {
	// j1.multiattaque(j1.attaques);

	if (tour % 2 == 1) {
		j1.jouertour(choice);
		j2.afficherCoups();
	} else {
		j2.jouertour(choice);
		j1.afficherCoups();
	}
	tour++;
	changevaluewithid(
		"turn",
		"Tour du joueur : " + ((tour % 2) + 2 * !(tour % 2))
	);
}

function setj1(classename) {
	switch (classename) {
		case "Guerrier":
			j1 = new Guerrier("Connan");
			break;

		case "Tank":
			j1 = new Tank("Darius");
			break;

		case "Mage":
			j1 = new Mage("Maximus");
			break;
	}

	setj2();

	j1.opponent = j2;
	j2.opponent = j1;

	changedisplaywithid("choix", "none"); // disparaitre le choix des perso
	changedisplaywithid("jeu", "block"); // Faire apparaitre le jeu
	changevaluewithid("turn", "Tour du joueur : 1");
	j1.afficherCoups();
}

function setj2() {
	let random = Math.floor(Math.random() * (4 - 1) + 1);

	switch (random) {
		case 1:
			j2 = new Guerrier("Connan", 2);
			break;

		case 2:
			j2 = new Tank("Darius", 2);
			break;

		case 3:
			j2 = new Mage("Maximus", 2);
			break;
	}
}
