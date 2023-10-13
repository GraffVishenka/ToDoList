import React, { useContext } from "react";
import { TeamOutlined } from "@ant-design/icons";
import { CustomButton } from "./CustomButton";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="leftHeaderBlock">
        <TeamOutlined className="todoIcon" />
        <h1>Задачи</h1>
      </div>
      {user.isAuth ? (
        <div className="rightHeaderBlock">
          <div>
            {user.user.surname} {user.user.firstname[0]}. {user.user.patronymic[0]}.
          </div>
          <CustomButton
            type="ghost"
            className="exit"
            onClick={() => {
              user.logout();
              navigate("/");
            }}
          >
            Выйти
          </CustomButton>
        </div>
      ) : (
        ""
      )}
    </div>
  );
});
