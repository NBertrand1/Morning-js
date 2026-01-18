const cryptoInfo = document.getElementById("crypto-info");
const cryptoName = document.getElementById("crypto-name");
const cryptoPrice = document.getElementById("crypto-price");
const cryptoVolume = document.getElementById("crypto-volume");

async function getCryptoInfo() {
    try {
        // API CoinGecko - gratuite et sans clé API
        const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
        const data = await res.json();

        // Afficher la structure pour débugger
        console.log("Données reçues:", data);

        // Extraire les données selon la structure de CoinGecko
        const name = data.name;
        const price = data.market_data.current_price.usd;
        const volume = data.market_data.total_volume.usd;

        // Afficher les données
        cryptoName.innerText = name;
        cryptoPrice.innerText = `$${price.toLocaleString()}`;
        cryptoVolume.innerText = `Volume: $${volume.toLocaleString()}`;

    } catch (error) {
        console.error("Erreur:", error);
        cryptoInfo.innerHTML = `<p>Erreur lors de la récupération des données.</p>`;
    }
}

getCryptoInfo();