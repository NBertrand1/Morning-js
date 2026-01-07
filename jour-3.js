/*Exercice 1
let utilisateur = {
    nom : "TANG ELOUMOU",
    age : 20,
    ville : "Kribi",
    estConnecte : true,
    hobbies : ["football", "musique", "cinema"],
}

console.log(`Bonjour, je m'appelle ${utilisateur.nom} et j'habite à ${utilisateur.ville}. J'aime le ${utilisateur.hobbies.join(", ")}`);

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
*/
//Exercice 3
let agesArray = [ 12, 16, 29, 56, 39, 25, 19, 8, 30, 45, 60 ]; 
let filteredAges = agesArray.filter(age => age >= 18);

console.log(filteredAges);