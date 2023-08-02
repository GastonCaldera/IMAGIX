import { createBrowserRouter, RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Post from "../pages/Post";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
] as RouteObject[]);
