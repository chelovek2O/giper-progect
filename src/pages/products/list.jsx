import { useMany, getDefaultFilter } from "@refinedev/core";
import {
  useTable,
  EditButton,
  ShowButton,
  getDefaultSortOrder,
  FilterDropdown,
  useSelect,
  List,
} from "@refinedev/antd";

import { Table, Space, Input, Select } from "antd";

export const ListProducts = () => {
  const { tableProps, filters, sorters } = useTable({
    sorters: { initial: [] },
    filters: {
      initial: [],
    },
    syncWithLocation: true,
  });

  //  const { data: categories, isLoading } = useMany({
  //    resource: "categories",
  //    ids: tableProps?.dataSource?.map((product) => product.category?.id) ?? [],
  //  });

  // const { selectProps } = useSelect({
  //    resource: "categories",
  //    defaultValue: getDefaultFilter("category.id", filters, "eq"),
  //  });

  return (
    <List>
      <Table {...tableProps} rowKey="product_name">
        <Table.Column
          dataIndex="product_name"
          title="product_name"
          sorter
          defaultSortOrder={getDefaultSortOrder("product_name", sorters)}
        />
        {/* <Table.Column
          dataIndex="ID product"
          title="ID product"
          sorter
          defaultSortOrder={getDefaultSortOrder("ID product", sorters)}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input />
            </FilterDropdown>
          )}
        /> */}
        {/* <Table.Column
          dataIndex={["category", "id"]}
          title="Category"
          render={(value) => {
            if (isLoading) {
              return "Loading...";
            }

            return categories?.data?.find((category) => category.id == value)
              ?.title;
          }}
           filterDropdown={(props) => (
              <FilterDropdown
                {...props}
              mapValue={(selectedKey) => Number(selectedKey)}
              >
                <Select style={{ minWidth: 200 }} {...selectProps} />
              </FilterDropdown>
           )}
          defaultFilteredValue={getDefaultFilter("category.id", filters, "eq")}
        /> */}
        {/* <Table.Column dataIndex="material" title="Material" /> */}
        <Table.Column dataIndex="product_cost" title="product_cost" />
        <Table.Column
          title="Actions"
          render={(_, record) => (
            <Space>
              <ShowButton hideText size="small" recordItemId={record.id} />
              <EditButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};