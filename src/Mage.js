import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

export class Mage extends Personnage {
	attaques = [
		new Spell("Boule de feu", 40, 10, () => {
			console.log(" *** Phrase magique lancant du feu ***");
		}),
		new Spell("Boule de glace", 20, 5, () => {
			console.log(
				"*** Phrase magique qui lance un projectile mieux qu'une boule de neige ***"
			);
		}),
		new Spell("Explosion", 100, 40, () => {
			console.log("*** BOUMMMMMMM !!!! ***");
		}),
	];
	constructor(name, id) {
		super(name, id);
		this.hp = 100;
		this.stamina = 500;
		this.strength = 40;
	}
}
