import { LinearProgress } from "@mui/material";
import {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { cookieManager } from "../../../../utils/cookie-manager";
import { AuthContextProps, AuthProviderProps } from "./auth.types";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [authToken, setAuthToken] = useState<string>();

  const updateUserToken = useCallback(() => {
    if (authToken) {
      cookieManager.set({
        cookieName: "authToken",
        value: authToken,
      });
    }
  }, [authToken]);

  useEffect(() => {
    updateUserToken();
  }, [updateUserToken]);

  useEffect(() => {
    const storedToken = cookieManager.get({ cookieName: "authToken" });
    setAuthToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {authToken === undefined ? <LinearProgress /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
