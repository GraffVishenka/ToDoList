import React, { useContext, useEffect, useState } from "react";
import { fetchOneTodosById } from "../../services/TodoService";
import { Context } from "../..";
import { fetchUsers } from "../../services/UserService";
import { CustomButton } from "../CustomButton";

const TodoModal = ({ active, setActive, id }) => {
  const { user } = useContext(Context);
  const [modalHeader, setModalHeader] = useState("");
  const [modalResponsible, setModalResponsible] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalDate, setModalDate] = useState("");
  const [users, setUsers] = useState([]);

  const dropDownStatus = [
    "К выполнению",
    "Выполняется",
    "Выполнен",
    "Отменена",
  ];
  const dropDownPriority = ["Низкий", "Средний", "Высокий"];
  const [modalPriority, setModalPriority] = useState(dropDownPriority[1]);
  const [modalStatus, setModalStatus] = useState(dropDownStatus[1]);

  useEffect(() => {
    fetchOneTodosById(id).then((data) => {
      setModalHeader(data.header);
      setModalResponsible(`${user.user.surname} ${user.user.firstname[0]}.`);
      setModalDescription(data.description);
      let deadline = data.deadline;
      if (typeof deadline === "string") {
        const result = deadline.split("T")[0];
        deadline = result;
      }
      setModalDate(deadline);
      setModalPriority(data.priority);
      setModalStatus(data.status);
    });
    fetchUsers(user.user.department).then((data) => {
      setUsers(data);
    });
  }, [id, user]);

  const save = () =>{
    
  }

  return (
    <div
      className={active ? "active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className={"modal_content"} onClick={(e) => e.stopPropagation()}>
        <div className="modalBody">
          <label>Header</label>
          <input
            value={modalHeader}
            onChange={(e) => setModalHeader(e.target.value)}
          />
          <label>Res</label>
          <select
            value={modalResponsible}
            onChange={(e) => setModalResponsible(e.target.value)}
          >
            {Object.values(users).map((user) => {
              return <option key={user.id}>{`${user.surname} ${user.firstname[0]}.`}</option>;
            })}
          </select>
          <label>status</label>
          <select
            value={modalStatus}
            onChange={(e) => setModalStatus(e.target.value)}
          >
            {dropDownStatus.map((status) => {
              return <option key={status}>{status}</option>;
            })}
          </select>
          <label>Data</label>
          <input
            type="date"
            value={modalDate}
            onChange={(e) => setModalDate(e.target.value)}
          />
          <label>Priority</label>
          <select
            value={modalPriority}
            onChange={(e) => setModalPriority(e.target.value)}
          >
            {dropDownPriority.map((priority) => {
              return <option key={priority}>{priority}</option>;
            })}
          </select>
          <h1>Descript</h1>
          <textarea
            value={modalDescription}
            onChange={(e) => this.setModalDescription(e.target.value)}
          ></textarea>
          <CustomButton type="primary" style={{marginTop:"22px"}}>Сохранить</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
