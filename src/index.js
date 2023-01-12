import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/route";
const router = createBrowserRouter(ROUTES);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
