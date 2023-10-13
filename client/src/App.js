import React, { useContext, useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from "./index";
import { Login } from "./pages/Login";
import { Todos } from "./pages/Todos";

import "./App.css";

export const App = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      user.checkAuth();
    } else {
      user.logout();
    }
  }, [user]);

  if (!user.isAuth) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<Navigate to="/todos" replace />} />
      </Routes>
    </Router>
  );
});
