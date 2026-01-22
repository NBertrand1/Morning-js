import livre from "./livre.js"

const bookList = document.getElementById("booklist");

const livres = [
    new livre("Pere inconnu", 2006, "Pabe Mongo", "Roman"),
    new livre("La marmite de Koka Mballa", 2012, "John doe", "Theatre"),
    new livre("Aigre douce", 2006, "MD Word", "Poesie"),
];

function showBooks() {
    livres.forEach(livre => {
        const card = document.createElement("card");
        card.innerHTML = `
        <h1>${livre.titre}</h1>
        <div class="card-subinfo">
            <p>${livre.annee_pub}</p>
            <p>${livre.auteur}</p>
            <p>${livre.genre}</p>
        </div>
        <button id="emprunt">emprunter</button>
        <button id="remise">rendre</button>
        `;
        bookList.appendChild(card);
    });
}

showBooks();

const empruntBtn = document.getElementById("emprunt");
empruntBtn.addEventListener("click", emprunter);

const remiseBtn =  document.getElementById("remise");
remiseBtn.addEventListener("click", rendre);

function emprunter() {
    empruntBtn.style.display = "none";
    remiseBtn.style.display = "block";
}

function rendre() {
    empruntBtn.style.display = "block";
    remiseBtn.style.display = "none";
}