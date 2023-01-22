import { Info, ViewList } from "@mui/icons-material";
import { ReactElement } from "react";

type Route = {
  path: string;
  name?: string;
  icon?: ReactElement;
};

type AllowedRoutes = "home" | "about" | "auth" | "list";

export const routes: Record<AllowedRoutes, Route> = {
  home: { path: "/", name: "My Lists", icon: <ViewList /> },
  about: { path: "/about", name: "About", icon: <Info /> },
  auth: { path: "/auth" },
  list: { path: "/list/:slug" },
};
