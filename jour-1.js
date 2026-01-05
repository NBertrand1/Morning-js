/* variables de depart
prix_TTC();

function prix_TTC() {
    const prixHorsTaxe = 10000;
    const tauxTVA = 0.1925;

    // variables après calculs
    const TVA = prixHorsTaxe * tauxTVA;
    const prixTTC = prixHorsTaxe + TVA;

    //résultat 
    console.log(`Pour un prix de 10000 FCFA, la TVA est de ${TVA} FCFA. Total : ${prixTTC} FCFA.`);
}*/ 

const langage = "javascript";

console.log(langage.slice(4, 10));
