import { useForm, useSelect, Edit } from "@refinedev/antd";

import { Form, Input, Select, InputNumber } from "antd";

export const EditProduct = () => {
  const { formProps, saveButtonProps, queryResult } = useForm({
    redirect: "show",
  });

   const { selectProps } = useSelect({
     resource: "categories",
    defaultValue: queryResult?.data?.data?.category?.id,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="product_name" name="product_name">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item> */}
        {/* <Form.Item label="Material" name="material">
          <Input />
        </Form.Item> */}
        {/* <Form.Item label="ID product" name={["ID product","id"]}>
          <Select {...selectProps} />
        </Form.Item> */}
        <Form.Item label="product_cost" name="product_cost">
          <InputNumber step="0.01" stringMode />
        </Form.Item>
      </Form>
    </Edit>
  );
};