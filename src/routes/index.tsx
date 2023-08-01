import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
] as RouteObject[]);
