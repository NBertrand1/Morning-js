import test from "node:test";
import assert from "node:assert/strict";
import Toast from "./toast.js";

function installDom() {
  const appended = [];
  const timers = [];
  const previousDocument = globalThis.document;
  const previousWindow = globalThis.window;

  globalThis.document = {
    createElement() {
      const attributes = new Map();
      const classes = new Set();
      return {
        className: "",
        textContent: "",
        attributes,
        classes,
        setAttribute(name, value) {
          attributes.set(name, value);
        },
        classList: {
          add(value) {
            classes.add(value);
          },
        },
        addEventListener() {},
        remove() {
          this.removed = true;
        },
      };
    },
    body: {
      appendChild(element) {
        appended.push(element);
      },
    },
  };

  globalThis.window = {
    setTimeout(callback, delay) {
      timers.push({ callback, delay });
      return timers.length;
    },
  };

  return {
    appended,
    timers,
    restore() {
      if (previousDocument === undefined) delete globalThis.document;
      else globalThis.document = previousDocument;
      if (previousWindow === undefined) delete globalThis.window;
      else globalThis.window = previousWindow;
    },
  };
}

test("normalizes unknown types and invalid durations", () => {
  assert.equal(new Toast("Hello", "unknown").type, "info");
  assert.equal(new Toast("Hello", "success", -1).duration, 3000);
  assert.equal(new Toast("Hello", "success", Number.POSITIVE_INFINITY).duration, 3000);
  assert.equal(new Toast("Hello", "success", 0).duration, 0);
});

test("does not render an empty message", () => {
  const dom = installDom();
  try {
    assert.equal(new Toast("   ").show(), null);
    assert.equal(dom.appended.length, 0);
  } finally {
    dom.restore();
  }
});

test("renders message as text and exposes accessible status semantics", () => {
  const dom = installDom();
  try {
    const message = '<img src=x onerror=alert(1)>';
    const toast = new Toast(message, "info", 0).show();

    assert.equal(toast.textContent, message);
    assert.equal(toast.attributes.get("role"), "status");
    assert.equal(toast.attributes.get("aria-live"), "polite");
    assert.equal(toast.attributes.get("aria-atomic"), "true");
    assert.equal(dom.appended.length, 1);
    assert.equal(dom.timers.length, 0);
  } finally {
    dom.restore();
  }
});

test("uses assertive announcements for errors", () => {
  const dom = installDom();
  try {
    const toast = new Toast("Failure", "error", 0).show();
    assert.equal(toast.attributes.get("role"), "alert");
    assert.equal(toast.attributes.get("aria-live"), "assertive");
  } finally {
    dom.restore();
  }
});

test("schedules dismissal only for positive durations", () => {
  const dom = installDom();
  try {
    const toast = new Toast("Saved", "success", 1200).show();
    assert.equal(dom.timers.length, 1);
    assert.equal(dom.timers[0].delay, 1200);

    dom.timers[0].callback();
    assert.equal(toast.classes.has("toast--leaving"), true);
    assert.equal(dom.timers.length, 2);
    assert.equal(dom.timers[1].delay, 350);
  } finally {
    dom.restore();
  }
});
