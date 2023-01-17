import { Dispatch, PropsWithChildren, SetStateAction } from "react";

export type AuthContextProps = {
  authToken?: string;
  setAuthToken: Dispatch<SetStateAction<string | undefined>>;
};

export type AuthProviderProps = PropsWithChildren;
