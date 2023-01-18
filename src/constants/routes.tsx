import { Info, ViewList } from "@mui/icons-material";
import { ReactElement } from "react";

type Route = {
  path: string;
  name?: string;
  icon?: ReactElement;
};

export const routes: { [key: string]: Route } = {
  home: { path: "/", name: "My Lists", icon: <ViewList /> },
  about: { path: "/about", name: "About", icon: <Info /> },
  auth: { path: "/auth" },
};
