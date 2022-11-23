import { Guerrier } from "./Guerrier.js";
import { Mage } from "./Mage.js";
import { Tank } from "./Tank.js";
import { changedisplaywithid, changevaluewithid } from "./Ui.js";

let j1 = null;
let j2 = null;
let tour = 1;

let personnages = {
	Guerrier: new Guerrier("Connan", 1),
	Mage: new Mage("Maximus", 1),
	Tank: new Tank("Darius", 1),
	// Ajouter d'autres personnages permet de les ajouter au choix automatiquement
};

changedisplaywithid("gamecontainer", "none");

// Creer les Box Personnage
for (let key in personnages) {
	let p = personnages[key];
	$("#choix").append(`<div class="Class-card-wrap">
						<button class="card" id="${key}" style='background-image: url("${p.imgsrc}");
						background-size: cover;
						background-position: center;'></button>
						</div>`);
}

// Creer les boutons

for (let key in personnages) {
	$("#attaques").append(`<button class="btn btn-primary" id="${key}">${key}</button>`);

	$("#" + key).click(() => {
		setj1(key);
	});
}

function playturn(choice) {
	let isodd = tour % 2 == 1;

	(isodd ? j1 : j2).jouertour();
	(isodd ? j2 : j1).afficherCoups();

	tour++;

	// Mettre les barres
}

function setj1(classename) {
	j1 = personnages[classename];
	j2 = personnages[Object.keys(personnages)[Math.floor(Math.random() * personnages.length)]];

	j1.opponent = j2;
	j2.opponent = j1;

	j1.afficherCoups();
}
