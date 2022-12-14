import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

const imgstock = [
	"../assets/Tanks/tank1.png",
	"../assets/Tanks/tank2.png",
	"../assets/Tanks/tank3.png",
	"../assets/Tanks/tank4.png",
	"../assets/Tanks/tank5.png",
	"../assets/Tanks/tank6.png",
];

class Tank extends Personnage {
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
	color = "rgba(0,150,0,0.2)";

	constructor(name, id, img) {
		super(name, id, img === undefined ? imgstock : [img]);
		super.getcolor();

		this.hp = 100;
		this.stamina = 2000;
		this.strength = 2;
	}
}

export { Tank };
