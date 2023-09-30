import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { Login } from "./Pages/Login";
import { Todo } from "./Pages/Todo";
import { ConfigProvider, theme } from "antd";
import { Auth } from "./features/auth/auth";

const router = createBrowserRouter([
  { path: Routes.login, element: <Login /> },
  { path: Routes.todo, element: <Todo /> },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{algorithm: theme.darkAlgorithm,}}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
