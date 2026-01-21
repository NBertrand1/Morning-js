const attackBtn = document.getElementById("attack-btn");

class Personnage {
    constructor(nom, sante, energie) {
        this.nom = nom;
        this.sante = sante;
        this.energie = energie;
    }

    attaquer(personnage) {
        if (personnage.sante <= 0) return;

        console.log(`${this.nom} attaque ${personnage.nom}`);
        personnage.sante -= 10;
        this.energie -= 10;

        const affichage = document.getElementById("affichage");
        affichage.innerHTML = `<p>${personnage.nom} a ${personnage.sante} points de vie <br> ${this.nom} a ${this.energie} points d'energie</p>`;
        
        console.log(`${personnage.nom} a ${personnage.sante} points de vie`);

        if (personnage.sante <= 0) {
            console.log(`${personnage.nom} est mort`);
            affichage.innerHTML = `<p>${personnage.nom} est mort</p>`;
        }
    }
}

const personnage1 = new Personnage("Personnage 1", 100, 100);
const personnage2 = new Personnage("Personnage 2", 100, 100);

attackBtn.addEventListener("click", () => personnage1.attaquer(personnage2));