import { useShow, useOne } from "@refinedev/core";
import { TextField, NumberField, MarkdownField, Show } from "@refinedev/antd";

import { Typography } from "antd";

export const ShowProduct = () => {
  const {
    queryResult: { data, isLoading },
  } = useShow();

   const { data: categoryData, isLoading: categoryIsLoading } = useOne({
     resource: "categories",
     id: data?.data?.category.id || "",
     queryOptions: {
       enabled: !!data?.data,
     },
   });

  return (
    <Show isLoading={isLoading}>
      {/* <Typography.Title level={5}>ID_product</Typography.Title>
      <TextField value={data?.data?.ID_product} /> */}

      <Typography.Title level={5}>product_name</Typography.Title>
      <TextField value={data?.data?.product_name} />

      {/* <Typography.Title level={5}>Description</Typography.Title>
      <MarkdownField value={data?.data?.description} /> */}

      {/* <Typography.Title level={5}>Material</Typography.Title>
      <TextField value={data?.data?.material} /> */}

      {/* <Typography.Title level={5}>Category</Typography.Title>
      <TextField
        value={categoryIsLoading ? "Loading..." : categoryData?.data?.title}
      /> */}

      <Typography.Title level={5}>cost</Typography.Title>
      <NumberField value={data?.data?.product_cost} />
    </Show>
  );
};