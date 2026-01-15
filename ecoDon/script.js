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
const reserveDonationBtn = document.getElementById("reserve-button");

function darkMode() {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

darkMode();

function showDonationList(dons) {
    donationList.innerHTML = ""; // On vide la liste            
        dons.forEach(don => {                
            const card = document.createElement("div");
            card.innerHTML = `
                 <div class="card">
                    <div class="card-info">
                        <h3 class="font-bold text-lg">${don.nom}</h3>
                        <p class="text-sm opacity-70">Quantité : ${don.quantite}</p>
                    </div>                    
                    <button id="reserve-button" class="text-emerald-600 font-bold hover:underline">Réserver</button>
                </div>
            `;
            donationList.appendChild(card);
    });
}

function addDonation() {
    const newDonation = {
        id: dons.length + 1,
        nom: donationName.value,
        quantite: donationQuantity.value
    };
    dons.push(newDonation);
    donationName.value = "";
    donationQuantity.value = "";
    showDonationList(dons);
}

function reserveDonation(id) {
    const donation = dons.find(don => don.id === id);
    dons.pop(donation);
    showDonationList(dons);
}

reserveDonationBtn.addEventListener("click", () => {
    reserveDonation(donation.id);
});


addDonationBtn.addEventListener("click", addDonation);
showDonationList(dons);