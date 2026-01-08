/*Exercice 1
const greetingName = document.getElementById("name");
const greetingBtn = document.getElementById("greeting-button");

greetingBtn.addEventListener("click", () => {
    alert(`Bonjour  ${greetingName.value}`);
});

//Exercice 2

const counterElement = document.getElementById("counter");
let counter = parseInt(counterElement.textContent);
const plus = document.getElementById("plus");
const moins = document.getElementById("moins");

function updateDisplay() {
    // Met à jour le texte dans le HTML
    counterElement.textContent = counter; // ou .textContent

    // Met à jour la couleur
    if (counter > 0) {
        counterElement.style.color = "green";
    } else {
        counterElement.style.color = "red";
    }
}

plus.addEventListener("click", () => {
    counter++; // Incrémente de 1
    updateDisplay();
});

moins.addEventListener("click", () => {
    counter--; // Décrémente de 1
    updateDisplay();
});*/

//Exercice 3 
let list = document.getElementById("items-list");
let newLi = document.getElementById("new-item");
let newLiBtn = document.getElementById("add-btn")

newLiBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = newLi.value;
    list.appendChild(li);
    newLi.value = "";
});

