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

calculationButton.addEventListener("click", updateResult());