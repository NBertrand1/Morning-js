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

//Exercice 3
let agesArray = [ 12, 16, 29, 56, 39, 25, 19, 8, 30, 45, 60 ]; 
let filteredAges = agesArray.filter(age => age >= 18);

console.log(filteredAges);

//Exercice 4 
let stock = [
    {nom : "Clavier", categorie : "Informatique", quantité : 10 },
    {nom : "Souris", categorie : "Informatique", quantité : 15 },
    {nom : "Casque", categorie : "Informatique", quantité : 20 },
    {nom : "T-shirt", categorie : "Vêtements", quantité : 5 },
    {nom : "Pantalon", categorie : "Vêtements", quantité : 12 },
    {nom : "Chapeau", categorie : "Vêtements", quantité : 8 },
    {nom : "Sac à main", categorie : "Vêtements", quantité : 18 },
    {nom : "Voiture" , categorie : "Automoblie" , quantité : 8},
    {nom : "Stylo", categorie : "Fourniture", quantité : 3 },
    {nom : "Ballon", categorie : "Sport", quantité : 4 },
]

let stockPourPromo = stock.filter(produit => produit.quantité<5);
console.log(stockPourPromo.map(produit => produit.nom));

//Exercice 5
let utilisateursBruts = [
    { id: 1, prenom: "jean", nom: "dupont" },
    { id: 2, prenom: "alice", nom: "martin" }   
];

let utilisateursNettoyes = utilisateursBruts.map(utilisateur => ({
    id: utilisateur.id,
    nomComplet: `${utilisateur.prenom} ${utilisateur.nom.toUpperCase()}`
}));
console.log(utilisateursNettoyes);

//Exercice 6
let carnetNotes = [
    { matiere: "Maths", note: 15 },
    { matiere: "Français", note: 12 },
    { matiere: "Anglais", note: 18 },
    { matiere: "Physique", note: 10 }
];

let moyenne = carnetNotes.reduce((total, note) => total + note.note, 0) / carnetNotes.length;
if (moyenne >= 10) {
    console.log("Admis");
} else {
    console.log("Ajourné");
}
    

const title = document.getElementById("title");
const changeButton = document.getElementById("button");
const body = document.body;

changeButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});
*/

const img = document.querySelector(".card-image img");
const btn = document.getElementById("btn");
let display = true;

btn.addEventListener("click", () => {
    if (display) {
        img.style.display = "none";
        btn.value = "Afficher";
        display = false
    }else{
        display = true;
        img.style.display = "block";
        btn.value = "Masquer";
    }
});