import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import useInput from "../hooks/useInput";
import { CustomInput } from "./CustomInput";
import { CustomButton } from "./CustomButton";
import { Context } from "..";
import { useNavigate } from "react-router-dom";

export const LoginForm = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const email = useInput("");
  const password = useInput("");

  return (
    <div className="wrap">
      <div className="containerLogin">
        <div>
          <div className="enter">Вход</div>
        </div>
        <div className="form">
          <CustomInput
            {...email}
            placeholder="Email"
            type="email"
            className="customInput"
          />
          <CustomInput
            {...password}
            placeholder="Password"
            type="password"
            className="customInput"
          />
          <CustomButton type="primary" htmlType="submit" onClick={()=>{user.login(email.value, password.value); navigate("/todos")}}>
            Войти
          </CustomButton>
        </div>
      </div>
    </div>
  );
});
