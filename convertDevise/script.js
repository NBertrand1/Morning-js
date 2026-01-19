const convertBtn = document.querySelector('#convert-btn');

async function convertir() {
    const montant = document.querySelector('#montant').value;
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        const data = await res.json();
        const taux = data.rates.USD;
        document.querySelector('#resultat').textContent = montant * taux;
    } catch (e) {
        console.error("Erreur de conversion");
    }
}

convertBtn.addEventListener('click', convertir);

