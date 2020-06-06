import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import moment from "moment";

import style from "./style.less";
import history from "@util/history";
import bookApi from "@api/book-api";

export default () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getList();
  }, []);
  //获取书单列表
  const getList = () => {
    setLoading(true);
    setLoading(false);
  };
  //列表复选框状态
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      // console.log(selectedRows);
    },
  };
  //新建书单
  const addBook = () => {
    history.push("/admin/book/add");
  };
  //编辑书单
  const editBook = (id: string | number) => {
    console.log(id);
    history.push({
      pathname: "/admin/book/add",
      state: id,
    });
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
          loading={loading}
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
    title: "点赞数",
    dataIndex: "loveNum",
  },
  {
    title: "评论数",
    dataIndex: "commentNum",
  },
  {
    title: "阅读量",
    dataIndex: "readNum",
  },
  {
    title: "日期",
    key: "createTime",
    render: (row: any) => {
      return (
        <span>{moment(row.createTime).format("YYYY-MM-DD hh:mm:ss")}</span>
      );
    },
  },
  {
    title: "操作",
    key: "action",
    render: (row: any) => {
      return (
        <span style={{ color: "blue" }}>
          <span
            onClick={() => {
              //editBook(row.id);
            }}
          >
            编辑
          </span>{" "}
          | <span style={{ color: "red" }}>删除</span>
        </span>
      );
    },
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
