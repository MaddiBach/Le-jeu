import { Guerrier } from "./Guerrier.js";
import { Mage } from "./Mage.js";
import { Tank } from "./Tank.js";
import { changedisplaywithid, changevaluewithid } from "./Ui.js";

let j1 = null;
let j2 = null;
let tour = 1;

let personnages = {
	Guerrier: new Guerrier("Connan"),
	Mage: new Mage("Maximus"),
	Tank: new Tank("Darius"),
	// Ajouter d'autres personnages permet de les ajouter au choix automatiquement
};
let Ennemy = {
	Guerrier: new Guerrier("Dark Connan", 2),
	Mage: new Mage("Dark Maximus", 2),
	Tank: new Tank("Dark Darius", 2),
};

// Creer les Box Personnage
for (let key in personnages) {
	let p = personnages[key]; // Recuperer le personnage
	$("#choix").append(`<div class="Class-card-wrap">
						<button class="card" id="${key}" style='background-image: url("${p.imgsrc}");
						background-size: cover;
						background-position: center;'"></button>
						</div>`); // Ajouter le bouton de choix de personnage
	$("#" + key).click(() => {
		startgame(key);
	}); // Ajouter le listener sur le bouton
}

$("#choix").style.backgroundImage = `url(../assets/Background/battleground${Math.floor(Math.random() * 3)}.jpg)`;

function startgame(classename) {
	let keys = Object.keys(Ennemy); // ["Guerrier", "Mage", "Tank"]

	j1 = personnages[classename];
	j2 = Ennemy[keys[Math.floor(Math.random() * keys.length)]]; // Choix aleatoire

	(j1.opponent = j2), (j2.opponent = j1); // Affecter les adversaires

	console.log("Joueur 1 : " + j1.name + " - Joueur 2 : " + j2.name);

	j1.afficherCoups(); // Afficher les coups du joueur 1 (le premier a jouer)
	setattaquelistener(); // Ajouter les listeners sur les boutons d'attaque

	changedisplaywithid("gamecontainer", "flex"); // Afficher le jeu
	changedisplaywithid("choix", "none"); // Cacher le choix des personnages

	$("#attaques").before(createcard(j1)); // Ajouter la carte du joueur 1
	$("#attaques").after(createcard(j2)); // Ajouter la carte du joueur 2
}

function playturn(choice) {
	// Jouer le tour
	console.log("Tour " + tour);
	console.log("Joueur 1 : " + j1.hp + " - Joueur 2 : " + j2.hp);

	let isodd = tour % 2 == 1; // Si le tour est impair, c'est le joueur 1 qui joue

	(isodd ? j1 : j2).jouertour(choice); // Jouer le tour du joueur 1 ou 2 en fonction du tour
	(isodd ? j2 : j1).afficherCoups(); // Afficher les coups du joueur 2 ou 1 en fonction du tour

	setattaquelistener(); // Ajouter les listeners sur les boutons d'attaque (a chaque tour)

	tour++; // Incrementer le tour

	// Mettre les barres
}

function setattaquelistener() {
	let btns = $("#attaques")[0].children;
	for (let i = 0; i < btns.length; i++) {
		btns[i].onclick = () => {
			playturn(i + 1);
		};
	}
}

function createcard(p) {
	return `<div class="card ${p.id == 1 ? "trigger" : ""}" id="card${p.id}" style="--color: ${p.color}">
	<div class="content" style="background-image : url(${p.imgsrc});">
		<div class="text">
			<h3 id="name${p.id}">${p.name}</h3>
			<p id="hp${p.id}">HP : ${p.hp}</p>
			<p id="stamina${p.id}">Stamina : ${p.stamina}</p>
		</div>
	</div>
</div>`;
}
