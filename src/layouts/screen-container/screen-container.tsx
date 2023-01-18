import { Suspense } from "react";
import {
  AppBar,
  Box,
  LinearProgress,
  Toolbar,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";
import { GlobalTheme } from "../../theme/global";
import { ScreenContainerProps } from "./screen-container.types";
import { SideMenu } from "../side-menu";

export const ScreenContainer: FunctionComponent<ScreenContainerProps> = ({
  children,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <GlobalTheme />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" component="h1" noWrap>
            Vibbraneo TODO
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu>
        <Suspense fallback={<LinearProgress />}>{children}</Suspense>
      </SideMenu>
    </Box>
  );
};
