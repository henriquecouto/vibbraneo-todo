import { Suspense } from "react";
import { AppBar, LinearProgress, Toolbar, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { GlobalTheme } from "../../theme/global";
import { ScreenContainerProps } from "./screen-container.types";

export const ScreenContainer: FunctionComponent<ScreenContainerProps> = ({
  children,
}) => {
  return (
    <>
      <GlobalTheme />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Vibbraneo TODO
          </Typography>
        </Toolbar>
      </AppBar>
      <Suspense fallback={<LinearProgress />}>{children}</Suspense>
    </>
  );
};
