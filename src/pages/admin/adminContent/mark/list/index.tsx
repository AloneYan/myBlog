import React from "react";
import { Table, Button } from "antd";

import style from "./style.less";
import history from "@util/history";

export default () => {
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      // console.log(selectedRows);
    }
  };

  const addMark = () => {
    history.push("/admin/mark/add");
  };

  return (
    <div className={style.mark}>
      <div className={style.markHeader}>
        <Button type="primary" shape="round" onClick={addMark}>
          新建
        </Button>
      </div>
      <div className={style.markList}>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection
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
    title: "题目",
    dataIndex: "name"
  },
  {
    title: "类型",
    dataIndex: "age"
  },
  {
    title: "作者",
    dataIndex: "address"
  },
  {
    title: "评论数",
    dataIndex: "address"
  },
  {
    title: "日期",
    dataIndex: "address"
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <span>
        <span>编辑</span>
        <span>删除</span>
      </span>
    )
  }
];

export const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park"
  }
];
