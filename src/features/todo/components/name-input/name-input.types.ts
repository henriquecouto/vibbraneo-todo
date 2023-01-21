import { Variant } from "@mui/material/styles/createTypography";

export type NameInputProps = {
  name?: string;
  fontSize?: Variant;
  onChange: (name: string) => void;
};
