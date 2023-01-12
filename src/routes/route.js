import React from "react";
import Home from "../pages/home";
import MainRoot from "../pages/MainRoot";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
