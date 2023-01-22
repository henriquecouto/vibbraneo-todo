import { Add, Check } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import { FunctionComponent, useRef, useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";

export const CreateTodo: FunctionComponent = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState("");

  const handleMenuStatus = () => setOpenMenu((old) => !old);

  const handleCopy = () => {
    navigate(generatePath(routes.list.path, { slug: value }));
  };

  return (
    <>
      <Button onClick={handleMenuStatus} ref={anchorRef} title="Share Link">
        <Add fontSize="small" />
        <Typography>Create a new todo list</Typography>
      </Button>
      <Popover
        open={openMenu}
        onClose={handleMenuStatus}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ padding: 1 }}
      >
        <Grid container alignItems="center" gap={1} padding={1}>
          <TextField
            fullWidth
            variant="filled"
            label="name"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleCopy} disabled={!value}>
                  <Check color={value ? "success" : "disabled"} />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Popover>
    </>
  );
};
