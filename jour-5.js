/* Exercice 1
const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const calculationButton = document.getElementById("btnResult");
const resultElement = document.getElementById("result");

function updateResult() {
    let firstNumber = Number(firstNumberInput.value);
    let secondNumber = Number(secondNumberInput.value);
    let Sum = firstNumber + secondNumber;
    resultElement.textContent = Sum;
}

calculationButton.addEventListener("click", updateResult);
*/

//Exercice 2 
const searchBarInput = document.getElementById("fruit-search-bar");
const fruitsListElement = document.getElementById("fruits-list");
const fruits = ["Apple", "Abricot", "Ananas", "Banana", "Blueberry", "Cherry"];

   function displayFruits() {
    
    fruitsListElement.innerHTML = '';

    fruits.forEach(fruit => {
        const li = document.createElement("li");
        li.textContent = fruit;
        fruitsListElement.appendChild(li);
    });

    searchBarInput.addEventListener('input', () => {
    const searchTerm = searchBarInput.value.toLowerCase().trim();
    const results = fruits.filter(=>fruit.toLowerCase().includes(searchTerm));
     
    });
};

displayFruits();

