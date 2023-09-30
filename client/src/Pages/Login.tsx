import { Layout } from "../components/Layout";
import { Card, Form, Row } from "antd";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";
import { UserData, useLoginMutation } from "../app/services/auth";
import { isErrorWithMessage } from "../utils/is-error-with-message";
import { useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser, loginUserResult] = useLoginMutation();
  const [error, setError] = useState("");

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate("/todos");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);
      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Неизвестная ошибка");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войти" style={{ width: "30rem", minWidth: "300px" }}>
          <Form onFinish={login}>
            <CustomInput name="email" placeholder="Email" type="email" />
            <CustomInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <CustomButton type="primary" htmlType="submit">
              Войти
            </CustomButton>
          </Form>
          <ErrorMessage message={error} />
        </Card>
      </Row>
    </Layout>
  );
};
