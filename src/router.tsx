import { LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider as RouterProviderLib,
} from "react-router-dom";
import { routes } from "./constants/routes";
import { AuthProvider } from "./features/auth";

const HomeScreen = lazy(() => import("./screens/home"));
const AboutScreen = lazy(() => import("./screens/about"));
const AuthScreen = lazy(() => import("./screens/auth"));

const router = createBrowserRouter([
  {
    path: routes.home.path,
    element: <HomeScreen />,
  },
  {
    path: routes.about.path,
    element: <AboutScreen />,
  },
  { path: routes.auth.path, element: <AuthScreen /> },
  { path: routes.list.path, element: <>list</> },
]);

export const RouterProvider = () => (
  <Suspense fallback={<LinearProgress />}>
    <AuthProvider>
      <RouterProviderLib router={router} />
    </AuthProvider>
  </Suspense>
);
