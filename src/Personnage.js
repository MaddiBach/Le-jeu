/* jshint esversion: 6 */

import { changevaluewithid } from "./Ui.js";
import { Spell } from "./Spell.js";

class Personnage {
	// Declaration attribut en dehors du constructeur

	_hp = 100;
	_strength = 10;
	_stamina = 25;
	opponent = null;
	attaques = [];
	id = 1;
	constructor(name, id, imgstock = ["../assets/default.png"]) {
		this.name = name;
		if (id != undefined) {
			this.id = id;
		}
		this.imgsrc = imgstock[Math.floor(Math.random() * imgstock.length)];
	}

	subirDommage(montant_dommage) {
		this.hp -= montant_dommage;
	}

	jouertour(choix) {}

	get hp() {
		return this._hp;
	}

	get stamina() {
		return this._stamina;
	}

	set hp(value) {
		this._hp = value;
	}

	set stamina(value) {
		this._stamina = value;
		// changevaluewithid("stamina" + this.id, value);
	}

	afficherCoups() {
		let i = 1;
		for (let attaque of this.attaques) {
			// Creer un bouton pour chaque attaque

			i++;
		}
	}
}

export { Personnage };
