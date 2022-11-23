import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

const imgstock = [
	"../assets/guerrier1.png",
	"../assets/guerrier2.png",
	"../assets/guerrier3.png",
	"../assets/guerrier4.png",
	"../assets/guerrier5.png",
];

export class Guerrier extends Personnage {
	attaques = [
		new Spell("Hache tournoyante", 40, 10, () => {
			console.log("*** FOIIUUUUU ***");
		}),
		new Spell("Hache Fracassante", 20, 5, () => {
			console.log("*** FRACAS ***");
		}),
		new Spell("Execution", 100, 40, () => {
			console.log("*** WAW QUELLE FORCE !!!! ***");
		}),
	];

	constructor(name, id, img) {
		super(name, id, img === undefined ? imgstock : [img]);

		this.hp = 100;
		this.stamina = 100;
		this.strength = 15;
	}
}
