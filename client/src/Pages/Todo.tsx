import { Layout } from "../components/Layout";
import { CustomButton } from "../components/CustomButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllMyTodoQuery } from "../app/services/todo";
import { ColumnsType } from "antd/es/table";
import { Todo as Todos } from "../types";
import { CustomTable } from "../components/CustomTable";

const columns: ColumnsType<Todos> = [
  { title: "Задача", dataIndex: "header", key: "header" },
  { title: "Приоритет", dataIndex: "priority", key: "priority" },
  { title: "Срок выполнения", dataIndex: "deadline", key: "deadline" },
  { title: "Ответственный", dataIndex: "responsible", key: "responsible" },
  { title: "Статус", dataIndex: "status", key: "status" },
];

export const Todo = () => {
  return (
    <Layout>
      <CustomButton type="primary" icon={<PlusCircleOutlined />}>
        Добавить
      </CustomButton>
      <CustomTable/>
    </Layout>
  );
};
