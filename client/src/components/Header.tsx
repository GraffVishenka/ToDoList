import { Layout, Space, Typography } from "antd";
import styles from "../styles/Header.module.css";
import { TeamOutlined } from "@ant-design/icons";
import { CustomButton } from "./CustomButton";
import { Link } from "react-router-dom";
import { Routes } from "../routes";

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Routes.todo}>
          <CustomButton type="ghost">
            <Typography.Title level={1}>Задачи</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Routes.login}>
          <CustomButton type="ghost">Выйти</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
