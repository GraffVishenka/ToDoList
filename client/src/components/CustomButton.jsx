import React from "react";
import { Form, Button } from "antd";

export const CustomButton = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
  className,
}) => {
  return (
    <Form.Item className={className}>
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
