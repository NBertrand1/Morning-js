/*exercice 1 ;
if (age >= 18) {
    console.log("Bienvenu(e)");
} else {
    console.log("Accès refusé");
}

exercice 2
for (let index = 0; index < age; index++) {
    console.log("Bonne année !");
};

exercice 3
age>=18?console.log("Bienvenu(e)"):console.log("Accès refusé");


fizzbuzz
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

exercice 4
const notes = [12, 9, 15, 18, 16];
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}

console.log(somme / notes.length);
*/

//InverserMot

function inverserMot(mot) {
    return mot.split('').reverse().join('');
}

console.log(inverserMot("hello"));