import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useAuth } from "../../features/auth/context/auth-context";
import { PrivateRouteProps } from "./private-route.types";

export const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  children,
}) => {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to={routes.auth.path} />;
  }

  return <>{children}</>;
};
