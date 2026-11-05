# Toast Notifications

A small JavaScript class for displaying accessible toast notifications without a framework.

## Usage

```js
import Toast from "./toast.js";

new Toast("Saved successfully.", "success").show();
new Toast("Something went wrong.", "error", 5000).show();
```

## API

`new Toast(message, type = "info", duration = 3000)`

- `message`: text shown to the user. It is inserted with `textContent`, not HTML.
- `type`: one of `success`, `error`, `warning`, or `info`. Unknown types fall back to `info`.
- `duration`: time in milliseconds before dismissal. Use `0` to keep the toast visible.

The component uses live-region semantics for assistive technologies and respects reduced-motion preferences.
