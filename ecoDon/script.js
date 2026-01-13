let dons = [
            { id: 1, nom: "Bananes mûres", quantite: 6 },
            { id: 2, nom: "Pain de campagne", quantite: 2 },
            { id: 3, nom: "Yaourts nature", quantite: 4 }
        ];

const themeBtn = document.getElementById("header-button");
const headerText = document.querySelector(".header-text");
const donationName = document.getElementById("donation-name");
const donationQuantity = document.getElementById("donation-quantity");
const addDonationBtn = document.getElementById("add-donation-button");
const donationList = document.getElementById("card-container");

function showDonationList(dons) {
    donationList.innerHTML = ""; // On vide la liste            
        dons.forEach(don => {                
            const card = document.createElement("div");
            card.innerHTML = `
                 <div>
                    <h3 class="font-bold text-lg">${don.nom}</h3>
                    <p class="text-sm opacity-70">Quantité : ${don.quantite}</p>                    
                </div>
                <button onclick="reserver(${don.id})" class="text-emerald-600 font-bold hover:underline">Réserver</button>
            `;
            donationList.appendChild(card);
    });
}

showDonationList(dons);