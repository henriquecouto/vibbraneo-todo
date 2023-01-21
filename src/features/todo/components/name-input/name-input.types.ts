import { Variant } from "@mui/material/styles/createTypography";
import { ReactNode } from "react";

export type NameInputProps = {
  name?: string;
  fontSize?: Variant;
  placeholder?: string;
  onChange: (name: string) => void;
  icon?: ReactNode;
};
