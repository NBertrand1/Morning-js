/*Exercice 1
let utilisateur = {
    nom : "TANG ELOUMOU",
    age : 20,
    ville : "Kribi",
    estConnecte : "True",
    hobbies : ["football", "musique", "cinema"],
}

console.log(`Bonjour, je m'appelle ${utilisateur.nom} et j'habite à ${utilisateur.ville}. J'aime le ${utilisateur.hobbies.join(", ")}`);
*/
//Exercice 2
let panier = [
    { nom: "Pomme", prix: 2000, quantite: 5 },
    { nom: "Orange", prix: 4000, quantite: 8 },
    { nom: "Banane", prix: 1000, quantite: 3 }
]

let prixTotalPanier = 0 ; 

panier.forEach(element => {
    prixTotalPanier += element.prix * element.quantite;
});

console.log(`le prix total du panier est : ${prixTotalPanier} FCFA`);