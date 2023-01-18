import { ContentCopy, Share } from "@mui/icons-material";
import { Button, Grid, IconButton, Popover, Typography } from "@mui/material";
import { FunctionComponent, useRef, useState } from "react";
import { clipboardManager } from "../../../../utils/clipboard-manager";
import { ShareButtonProps } from "./share-button.types";

export const ShareButton: FunctionComponent<ShareButtonProps> = ({ value }) => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuStatus = () => setOpenMenu((old) => !old);

  const handleCopy = () => {
    clipboardManager.copy({ value });
    handleMenuStatus();
  };

  return (
    <>
      <IconButton onClick={handleMenuStatus} ref={anchorRef} title="Share Link">
        <Share fontSize="small" />
      </IconButton>
      <Popover
        open={openMenu}
        onClose={handleMenuStatus}
        anchorEl={anchorRef.current?.parentElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ padding: 1 }}
      >
        <Grid container alignItems="center" gap={1} padding={1}>
          <Typography
            sx={{
              backgroundColor: "ThreeDDarkShadow",
              borderRadius: 1,
              padding: 1,
              color: "white",
            }}
          >
            {value}
          </Typography>
          <Button onClick={handleCopy}>
            Copy <ContentCopy sx={{ ml: 2 }} />
          </Button>
        </Grid>
      </Popover>
    </>
  );
};
