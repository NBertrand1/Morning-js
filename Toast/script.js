import Toast from "./toast.js";

const showToastButton = document.querySelector("#showToast");

if (showToastButton) {
  showToastButton.addEventListener("click", () => {
    new Toast("Votre action a bien été prise en compte.", "success").show();
  });
}
