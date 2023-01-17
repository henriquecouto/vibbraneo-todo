import { Grid, Paper } from "@mui/material";
import { Navigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { AuthForm, AuthHeader } from "../features/auth";
import { useAuth } from "../features/auth/context/auth-context";
import { GlobalTheme } from "../theme/global";

export const AuthScreen = () => {
  const { authToken } = useAuth();

  if (authToken) {
    return <Navigate to={routes.home} />;
  }

  return (
    <>
      <GlobalTheme />
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Paper
            sx={{
              padding: 2,
            }}
          >
            <AuthHeader />
            <AuthForm />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
