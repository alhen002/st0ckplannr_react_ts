import { createBrowserRouter } from "react-router-dom";

import Home from "./roots/Home";
import Dashboard from "./roots/dashboard";
import Products from "./roots/Products";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  {
    path: "/admin",
    Component: Dashboard,
    children: [
      { path: "/admin/products", Component: Products },
      { path: "/admin/suppliers", Component: Dashboard },
    ],
  },
]);
