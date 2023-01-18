type CopyParams = {
  value: string;
};

export type ClipboardManager = {
  copy: (params: CopyParams) => void;
};
