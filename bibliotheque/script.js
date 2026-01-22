import livre from "./livre.js"

const bookList = document.getElementById("booklist");

const livres = [
    new livre("Pere inconnu", 2006, "Pabe Mongo", "Roman"),
    new livre("La marmite de Koka Mballa", 2012, "John doe", "Theatre"),
    new livre("Aigre douce", 2006, "MD Word", "Poesie"),
];

livres.forEach(livre => {
    const card = document.createElement("card");
    card.innerHTML = `
    <h1>${livre.titre}</h1>
    <div class="card-subinfo">
        <p>${livre.annee_pub}</p>
        <p>${livre.auteur}</p>
        <p>${livre.genre}</p>
    </div>
    <button>emprunter</button>
    <button>rendre</button>
    `;
    bookList.appendChild(card);
});