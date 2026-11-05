const TOAST_TYPES = new Set(["success", "error", "warning", "info"]);

export default class Toast {
  constructor(message, type = "info", duration = 3000) {
    this.message = String(message ?? "");
    this.type = TOAST_TYPES.has(type) ? type : "info";
    this.duration = Number.isFinite(duration) ? Math.max(0, duration) : 3000;
  }

  show() {
    if (!this.message.trim()) {
      return null;
    }

    const toast = document.createElement("div");
    toast.className = `toast toast--${this.type}`;
    toast.textContent = this.message;
    toast.setAttribute("role", this.type === "error" ? "alert" : "status");
    toast.setAttribute("aria-live", this.type === "error" ? "assertive" : "polite");
    toast.setAttribute("aria-atomic", "true");

    document.body.appendChild(toast);

    if (this.duration > 0) {
      window.setTimeout(() => {
        toast.classList.add("toast--leaving");
        toast.addEventListener("transitionend", () => toast.remove(), { once: true });
        window.setTimeout(() => toast.remove(), 350);
      }, this.duration);
    }

    return toast;
  }
}
