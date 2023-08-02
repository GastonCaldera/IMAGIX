import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";
import NotFound from "../pages/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
] as RouteObject[]);
