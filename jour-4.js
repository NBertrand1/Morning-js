const greetingName = document.getElementById("name");
const greetingBtn = document.getElementById("greeting-button");

greetingBtn.addEventListener("click", () => {
    alert(`Bonjour  ${greetingName.value}`);
});