import React from "react";
import useInput from "../../hooks/useInput";

const TodoModal = ({ active, setActive, id }) => {
    const modalHeader = useInput("апр");
    const modalResponsible = useInput("");
    const modalDescription = useInput("Выполняется");

    console.log(id)
  return (
    <div
      className={active ? "active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className={"modal_content"} onClick={(e) => e.stopPropagation()}>
        <div className="modalBody">
          <label>Header</label>
          <input type="text" {...modalHeader}/>
          <label>Res</label>
          <input type="text" {...modalResponsible}/>
          <label>status</label>
          <select>
            <option>К выполнению</option>
            <option>Выполняется</option>
            <option>Выполнена</option>
            <option>Отменена</option>
          </select>
          <label>Data</label>
          <input type="date" />
          <label>Priority</label>
          <select>
            <option>Низкий</option>
            <option>Средний</option>
            <option>Высокий</option>
          </select>
          <h1>Descript</h1>
          <textarea type="text" {...modalDescription}></textarea>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
