import { LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from "react-router-dom";
import { routes } from "./constants/routes";
import { AuthProvider } from "./features/auth";
import { AuthScreen } from "./screens/auth";

const HomeScreen = lazy(() => import("./screens/home"));
const AboutScreen = lazy(() => import("./screens/about"));

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomeScreen />,
  },
  {
    path: routes.about,
    element: <AboutScreen />,
  },
  { path: routes.auth, element: <AuthScreen /> },
]);

export const RouterProvider = () => (
  <Suspense fallback={<LinearProgress />}>
    <AuthProvider>
      <RouterProviderLib router={router} />
    </AuthProvider>
  </Suspense>
);
