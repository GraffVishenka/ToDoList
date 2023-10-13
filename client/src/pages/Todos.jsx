/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { Header } from "../components/Header";
import { observer } from "mobx-react-lite";
import TodoModal from "../components/modals/TodoModal";

export const Todos = observer(() => {
  const { todoStore } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  let todos = [];
  const [todoId, setTodoId] = useState("");

  const RowClick = (id) => {
    setModalActive(true);
    setTodoId(id);
  };

  useEffect(() => {
    const data = todoStore.getAllMyTodos();
  }, [todoStore]);

  for (let i = 0; i < sessionStorage.length; i++) {
    todos.push(JSON.parse(sessionStorage.getItem(`todo${i}`)));
  }

  return (
    <div className="container">
      <TodoModal active={modalActive} setActive={setModalActive} id = {todoId}/>
      <Header />
      <table className="table">
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id} onClick={() => RowClick(sessionStorage[todo])}>
                <td>{todo.header}</td>
                <td>{todo.priority}</td>
                <td>{todo.deadline}</td>
                <td>{todo.responsible}</td>
                <td>{todo.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});
