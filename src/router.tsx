import { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from "react-router-dom";
import { ScreenContainer } from "./layouts/screen-container";
import { routes } from "./constants/routes";

const HomeScreen = lazy(() => import("./screens/home"));
const AboutScreen = lazy(() => import("./screens/about"));

const router = createBrowserRouter([
  { path: routes.home, element: <HomeScreen /> },
  { path: routes.about, element: <AboutScreen /> },
]);

export const RouterProvider = () => (
  <ScreenContainer>
    <RouterProviderLib router={router} />
  </ScreenContainer>
);
