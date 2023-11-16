/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { observer } from "mobx-react-lite";
import { fetchTodos } from "../services/TodoService";
import TodoModal from "../components/modals/TodoModal";
import { Context } from "..";
import { CustomButton } from "../components/CustomButton";

export const Todos = observer(() => {
  const { todoStore } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [todoId, setTodoId] = useState("");

  const RowClick = (id) => {
    setModalActive(true);
    setTodoId(id);
  };

  useEffect(() => {
    fetchTodos().then((data) => todoStore.setTodo(data));
  }, [todoStore]);
  return (
    <div className="container">
      <TodoModal active={modalActive} setActive={setModalActive} id={todoId} />
      <Header />
      <div>
        <CustomButton/>
        <select>
          
        </select>
      </div>
      <table className="table">
        <tbody>
          {Object.values(todoStore.todo).map((todo) => {
            return (
              <tr key={todo.id} onClick={() => RowClick(todo.id)}>
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
