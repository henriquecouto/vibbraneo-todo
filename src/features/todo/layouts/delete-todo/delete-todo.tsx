import { Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { DeleteTodoProps } from "./delete-todo.types";

export const DeleteTodo: FunctionComponent<DeleteTodoProps> = ({
  onConfirm,
  name,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = () => setOpenDialog(false);

  const handleOpen = () => setOpenDialog(true);

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Delete />
      </IconButton>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirm deletion of `{name}` todo list?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            All sub-items will be removed and this action cannot be reversed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleConfirm}>
            Yes, delete!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
