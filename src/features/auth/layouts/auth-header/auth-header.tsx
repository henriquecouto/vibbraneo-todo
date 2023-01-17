import { Grid, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export const AuthHeader: FunctionComponent = () => {
  return (
    <Grid container direction="column" component="header">
      <Grid item>
        <Typography variant="h6" component="h1">
          Welcome to Vibbraneo TODO List!
        </Typography>

        <Typography variant="caption">
          Continue with your email and password.
        </Typography>
      </Grid>
    </Grid>
  );
};
