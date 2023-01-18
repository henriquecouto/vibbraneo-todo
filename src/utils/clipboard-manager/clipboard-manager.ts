import { ClipboardManager } from "./clipboard-manager.types";

export const clipboardManager: ClipboardManager = {
  copy: ({ value }) => navigator.clipboard.writeText(value),
};
