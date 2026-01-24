export default class Toast {
    constructor(message, type) {
        this.message = message;
        this.type = type;
    }

    show() {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.classList.add(this.type);
        toast.innerHTML = this.message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}