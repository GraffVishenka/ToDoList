import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import UserStore from "./store/UserStore";

import "./index.css";
import TodoStore from "./store/TodoStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ user: new UserStore(), todoStore: new TodoStore() }}>
    <App />
  </Context.Provider>
);
