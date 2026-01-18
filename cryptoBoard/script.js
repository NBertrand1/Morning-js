const cryptoInfo = document.getElementsByClassName("crypto-info");
const cryptoName = document.getElementById("crypto-name");
const cryptoPrice = document.getElementById("crypto-price");
const cryptoVolume = document.getElementById("crypto-volume");

async function getCryptoInfo() {
    try {
        const res = await fetch("https://api.freecryptoapi.com/v1/getData?symbol=BTC");
        const data = await res.json();
        
        //renvoyer les données à jour
        cryptoName.innerText = `${data.name}`;
        cryptoPrice.innerText = `${data.price}`;
        cryptoVolume.innerText = `${data.volume}`;

        //affichage pour toutes les cryptos
        /*array.forEach(element => {
            
        });*/


    } catch (error) {
        console.log("error:", error);
        cryptoInfo.innerHTML = `<p>Error while syncing data. refresh the page</p>`
    }
}

getCryptoInfo();