import React, { useEffect, useState } from "react";
import { Table, Button, message, Modal } from "antd";
import moment from "moment";

import style from "./style.module.less";
import history from "@util/history";
import api from "@api/api-ins";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bookId, setBookId] = useState<number>();
  useEffect(() => {
    getList();
  }, []);
  //获取书单列表
  const getList = async () => {
    setLoading(true);
    const res: any = await api.book.list.req();
    if (res.status === 200) {
      setData(res.data);
    }
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
  const editBook = (id: number) => {
    history.push({
      pathname: "/admin/book/add",
      state: id,
    });
  };
  //删除书单
  const deleteBook = (id: number) => {
    setVisible(true);
    setBookId(id);
  };
  //确定删除书单
  const handleOk = async () => {
    const res: any = await api.book.remove.req({ id: bookId });
    if (res.status === 200) {
      setVisible(false);
      message.success("删除成功");
      getList();
    }
  };
  //关闭删除书单弹窗
  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "书名",
      dataIndex: "name",
    },
    {
      title: "类型",
      dataIndex: "type",
    },
    {
      title: "推荐",
      dataIndex: "star",
    },
    {
      title: "作者",
      dataIndex: "author",
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
                editBook(row.id);
              }}
            >
              编辑
            </span>{" "}
            |{" "}
            <span
              style={{ color: "red" }}
              onClick={() => {
                deleteBook(row.id);
              }}
            >
              删除
            </span>
          </span>
        );
      },
    },
  ];

  return (
    <div className={style.book}>
      <div className={style.bookHeader}>
        <Button type="primary" shape="round" onClick={addBook}>
          新建
        </Button>
      </div>
      <div className={style.bookList}>
        <Table
          rowKey={(record: any) => record.id}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          loading={loading}
          columns={columns}
          dataSource={data}
        />
        <Modal
          title="删了？"
          visible={visible}
          onOk={handleOk}
          okText="心意已决"
          cancelText="再想想"
          onCancel={handleCancel}
        >
          确定删除吗
        </Modal>
      </div>
    </div>
  );
};
