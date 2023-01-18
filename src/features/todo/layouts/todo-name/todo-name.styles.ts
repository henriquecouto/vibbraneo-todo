import { TextField as MuiTextField } from "@mui/material";
import { styled } from "@mui/system";

export const TextField = styled(MuiTextField)({
  "& .MuiInputBase-input": {
    fontSize: "1.5rem",
  },
});
