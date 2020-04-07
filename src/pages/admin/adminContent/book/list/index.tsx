import React from "react";
import { Table, Button } from "antd";

import style from "./style.less";
import history from "@util/history";

export default () => {
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      // console.log(selectedRows);
    },
  };

  const addBook = () => {
    history.push("/admin/book/add");
  };

  return (
    <div className={style.book}>
      <div className={style.bookHeader}>
        <Button type="primary" shape="round" onClick={addBook}>
          新建
        </Button>
      </div>
      <div className={style.bookList}>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};

export const columns = [
  {
    title: "书名",
    dataIndex: "name",
  },
  {
    title: "类型",
    dataIndex: "age",
  },
  {
    title: "推荐",
    dataIndex: "age",
  },
  {
    title: "作者",
    dataIndex: "address",
  },
  {
    title: "评论数",
    dataIndex: "address",
  },
  {
    title: "日期",
    dataIndex: "address",
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <span>
        <span>编辑</span>
        <span>删除</span>
      </span>
    ),
  },
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];
