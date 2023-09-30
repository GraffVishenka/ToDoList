import { Form, Button } from "antd";

type CustomButtonProps = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type:
    | "link"
    | "text"
    | "default"
    | "primary"
    | "dashed"
    | "ghost"
    | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: "default" | "circle" | "round" | undefined;
  icon?: React.ReactNode;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}) => {
  return (
    <Form.Item>
      <Button
        onClick={onClick}
        icon={icon}
        shape={shape}
        loading={loading}
        danger={danger}
        htmlType={htmlType}
        type={type}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
