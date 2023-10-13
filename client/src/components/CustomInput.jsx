import { Form, Input } from "antd";

export const CustomInput = ({
  type = "text",
  name,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <Form>
      <Form.Item
        name={name}
        rules={[{ required: true, message: "Обязательное поле" }]}
        shouldUpdate={true}
      >
        <Input
          className={className}
          placeholder={placeholder}
          type={type}
          size="large"
          onChange={onChange}
          value={value}
        />
      </Form.Item>
    </Form>
  );
};
