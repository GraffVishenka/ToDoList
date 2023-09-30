import { Form, Input } from "antd";

type CustomInputProps = {
  name: string;
  placeholder: string;
  type?: string;
};

export const CustomInput:React.FC<CustomInputProps> = ({
  type = 'text',
  name,
  placeholder,
}) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required: true, message: "Обязательное поле" }]}
      shouldUpdate={ true }
    >
      <Input
        placeholder={placeholder}
        type={ type }
        size="large"
      />
    </Form.Item>
  );
};