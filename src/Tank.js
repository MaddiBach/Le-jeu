import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

export class Tank extends Personnage {
	attaques = [
		new Spell("Rouler sur l'ennemi", 40, 10, () => {
			console.log("*** Est-ce une boule ? ***");
		}),
		new Spell("Coup de bouclier", 20, 5, () => {
			console.log("*** AIE !! J'aurais pas aimer me la prendre celle la ***");
		}),
		new Spell("Calin mortel", 100, 40, () => {
			console.log("*** Bruit d'os qui se brisent ***");
		}),
	];
	constructor(name, id) {
		super(name, id);
		this.hp = 100;
		this.stamina = 2000;
		this.strength = 2;
	}
}
