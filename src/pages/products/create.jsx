import { useForm, useSelect, Create } from "@refinedev/antd";

import { Form, Input, Select, InputNumber } from "antd";

export const CreateProduct = () => {
  const { formProps, saveButtonProps } = useForm({
    redirect: "edit",
  });

  //  const { selectProps } = useSelect({
  //    resource: "categories",
  //  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item label="product_name" name="product_name" dataIndex="product_name">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Description" name="description">
          <Input.TextArea />
        </Form.Item> */}
        {/* <Form.Item label="Material" name="material">
          <Input />
         </Form.Item> */}
        {/* <Form.Item label="ID product" name="ID product" dataIndex="ID product" >
          <Input /> */}
          {/* <Select {...selectProps} /> */}
        {/* </Form.Item>  */}
        <Form.Item label="product_cost" name="product_cost" dataIndex="product_cost"> 
          <InputNumber step="1" stringMode />
        </Form.Item>
      </Form>
    </Create>
  );
};