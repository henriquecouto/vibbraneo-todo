import { CancelOutlined, Check, Edit } from "@mui/icons-material";
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { ChangeEventHandler, FunctionComponent, useState } from "react";
import { NameInputProps } from "./name-input.types";

export const NameInput: FunctionComponent<NameInputProps> = ({
  name,
  onChange,
  fontSize = "body1",
}: NameInputProps) => {
  const { typography } = useTheme();
  const [edit, setEdit] = useState(false);
  const [changedName, setChangedName] = useState(name);

  const handleEdit = () => setEdit((old) => !old);

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setChangedName(target.value);
  };

  const handleSaveName = async () => {
    onChange(changedName || "");
    handleEdit();
  };

  return (
    <Grid container alignItems="center">
      {edit ? (
        <TextField
          fullWidth
          value={changedName}
          variant="standard"
          onChange={handleChangeName}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: typography[fontSize].fontSize,
            },
          }}
          InputProps={{
            endAdornment: (
              <>
                <IconButton onClick={handleEdit}>
                  <CancelOutlined color="error" />
                </IconButton>
                <IconButton onClick={handleSaveName}>
                  <Check color="success" />
                </IconButton>
              </>
            ),
          }}
        />
      ) : (
        <>
          <Grid item xs>
            <Typography variant={fontSize}>{name}</Typography>
          </Grid>
          <IconButton onClick={handleEdit}>
            <Edit />
          </IconButton>
        </>
      )}
    </Grid>
  );
};
