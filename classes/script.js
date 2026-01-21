class Personnage{
    constructor(nom, sante, energie){
        this.nom = nom;
        this.sante = sante;
        this.energie = energie;
    }

    attaquer(personnage){
        console.log(`${this.nom} attaque ${personnage.nom}`);
        personnage.sante -= 10;
        console.log(`${personnage.nom} a ${personnage.sante} points de vie`);
    }
}

const personnage1 = new Personnage("Personnage 1", 100, 100);
const personnage2 = new Personnage("Personnage 2", 100, 100);

personnage1.attaquer(personnage2);