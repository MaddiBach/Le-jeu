import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

const imgstock = [
	"../assets/mage1.png",
	"../assets/mage2.png",
	"../assets/mage3.png",
	"../assets/mage4.png",
	"../assets/mage5.png",
];

export class Mage extends Personnage {
	attaques = [
		new Spell("Boule de feu", 40, 10, () => {
			console.log(" *** Phrase magique lancant du feu ***");
		}),
		new Spell("Boule de glace", 20, 5, () => {
			console.log("*** Phrase magique qui lance un projectile mieux qu'une boule de neige ***");
		}),
		new Spell("Explosion", 100, 40, () => {
			console.log("*** BOUMMMMMMM !!!! ***");
		}),
	];

	constructor(name, id, img) {
		super(name, id, img === undefined ? imgstock : [img]);

		this.hp = 100;
		this.stamina = 500;
		this.strength = 40;
	}
}
