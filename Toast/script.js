import Toast from "./toast.js";

const showToastBtn = document.getElementById("showToast");

showToastBtn.addEventListener("click", () => {
    const toast = new Toast("This is a toast", "success");
    toast.show();
});