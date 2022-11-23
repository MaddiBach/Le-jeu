import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

const imgstock = [
	"../assets/Mages/mage1.png",
	"../assets/Mages/mage2.png",
	"../assets/Mages/mage3.png",
	"../assets/Mages/mage4.png",
	"../assets/Mages/mage5.png",
	"../assets/Mages/mage6.png",
	"../assets/Mages/mage7.png",
	"../assets/Mages/mage8.png",
	"../assets/Mages/mage9.png",
	"../assets/Mages/mage10.png",
	"../assets/Mages/mage11.png",
	"../assets/Mages/mage12.png",
	"../assets/Mages/mage13.png",
];

class Mage extends Personnage {
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

	color = "#0000FF";

	constructor(name, id, img) {
		super(name, id, img === undefined ? imgstock : [img]);
		super.getcolor();
		this.hp = 100;
		this.stamina = 500;
		this.strength = 40;
	}
}

export { Mage };
