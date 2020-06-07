import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "antd";
import moment from "moment";

import style from "./style.less";
import history from "@util/history";
import markApi from "@api/mark-api";

export default () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [markId, setMarkId] = useState<string | number>("");

  useEffect(() => {
    getList();
  }, []);
  //获取文档列表
  const getList = async () => {
    setLoading(true);
    const res = await markApi.getMarkList();
    if (res.data.status === 200) {
      setData(res.data.data);
    }
    setLoading(false);
  };
  //列表复选框状态
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      // console.log(selectedRows);
    },
  };
  //跳转新建文档
  const addMark = () => {
    history.push("/admin/mark/add");
  };
  //编辑文档
  const editMark = (id: string | number) => {
    history.push({
      pathname: "/admin/mark/add",
      state: id,
    });
  };
  //删除文档
  const deleteMark = (id: string | number) => {
    setVisible(true);
    setMarkId(id);
  };
  //确定删除文档
  const handleOk = () => {};
  //关闭删除文档弹窗
  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "题目",
      dataIndex: "title",
    },
    {
      title: "类型",
      dataIndex: "type",
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
                editMark(row.id);
              }}
            >
              编辑
            </span>{" "}
            |{" "}
            <span
              style={{ color: "red" }}
              onClick={() => {
                deleteMark(row.id);
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
            ...rowSelection,
          }}
          loading={loading}
          rowKey={(record: any, index) => record.id + index}
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
