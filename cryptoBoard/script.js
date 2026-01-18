const cryptoTableBody = document.getElementById("crypto-table-body");
const loading = document.getElementById("loading");

async function getCryptoInfo() {
    try {
        // API CoinGecko - Top 10 cryptos par capitalisation
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const data = await res.json();

        console.log("Données reçues:", data);

        // Cacher le message de chargement
        loading.style.display = "none";

        // Vider le tableau avant d'ajouter les nouvelles données
        cryptoTableBody.innerHTML = "";

        // Boucler sur chaque crypto et créer une ligne
        data.forEach((crypto, index) => {
            // Déterminer la couleur du pourcentage (vert si positif, rouge si négatif)
            const priceChangeColor = crypto.price_change_percentage_24h >= 0 ? "green" : "red";
            const priceChangeSign = crypto.price_change_percentage_24h >= 0 ? "+" : "";

            // Créer une nouvelle ligne
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${crypto.image}" alt="${crypto.name}" width="30"></td>
                <td><strong>${crypto.name}</strong> (${crypto.symbol.toUpperCase()})</td>
                <td>$${crypto.current_price.toLocaleString()}</td>
                <td style="color: ${priceChangeColor}">
                    ${priceChangeSign}${crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>$${crypto.total_volume.toLocaleString()}</td>
            `;

            // Ajouter la ligne au tableau
            cryptoTableBody.appendChild(row);
        });

    } catch (error) {
        console.error("Erreur:", error);
        loading.innerText = "Erreur lors de la récupération des données.";
    }
}

getCryptoInfo();