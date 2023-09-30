import { Table } from "antd";
import { useGetAllMyTodoQuery } from "../app/services/todo";
import { ColumnsType } from "antd/es/table";
import { Todo as Todos } from "../types";

const columns: ColumnsType<Todos> = [
  { title: "Задача", dataIndex: "header", key: "header" },
  { title: "Приоритет", dataIndex: "priority", key: "priority" },
  { title: "Срок выполнения", dataIndex: "deadline", key: "deadline" },
  { title: "Ответственный", dataIndex: "responsible", key: "responsible" },
  { title: "Статус", dataIndex: "status", key: "status" },
];
export const CustomTable = () => {
  const { data, isLoading, } = useGetAllMyTodoQuery();

  return (
    <Table
      loading={isLoading}
      dataSource={data}
      pagination={false}
      columns={columns}
      rowKey={(record: any) => record.id}
      onRow={(record: any) => {
        return {
          onDoubleClick: () => {
            console.log(data);
          },
        };
      }}
    ></Table>
  );
};
