import React, { useState, useEffect } from "react";
import BaftEditor from "@components/baftEditor";
import { Form, Input, Select, Modal, Button, message } from "antd";

import style from "./style.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";
import markApi from "@api/mark-api";

interface GoMark {}

export default () => {
  const [fwbCont, setFwbCont] = useState("");
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);

  useEffect(() => {
    getTypeList();
  }, []);

  //添加文档类型对话框
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const modalFinish = async (val: any) => {
    val.type = "mark";
    const res = await markApi.saveMarkType(val);
    if (res.data.status === 0) {
      message.success("保存成功");
      getTypeList();
      setVisible(false);
    }
  };
  //获取文档类型列表
  const getTypeList = async () => {
    const res = await markApi.getMarkTypeList({ type: "mark" });
    if (res.data.status === 0) {
      setTypeList(res.data.data);
    }
  };
  //获取富文本内容
  const goMark = (val: string) => {
    setFwbCont(val);
  };
  //发布
  const onFinish = (val: any) => {
    const param = val;
    param.content = fwbCont;
    console.log(param);
  };
  //返回列表跳转
  const addReturn = () => {
    history.push("/admin/mark");
  };
  return (
    <div className={style.add}>
      <div className={style.addReturn} onClick={addReturn}>
        <Iconfont type="icon-tuichu" />
      </div>
      <Form onFinish={onFinish}>
        <Form.Item
          label="文档题目"
          name="markname"
          rules={[{ required: true, message: "请填写文章题目" }]}
        >
          <Input />
        </Form.Item>
        <div className={style.addIcontNext}>
          <Form.Item
            name="marktype"
            label="文档类型"
            rules={[{ required: true, message: "请选择文档类型" }]}
          >
            <Select placeholder="请选择文档类型">
              {typeList.map((item: any) => (
                <Select.Option key={item.id} value={item.type}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <div className={style.addIcont} onClick={showModal}>
            <Iconfont type="icon-tianjia" />
          </div>
        </div>
        <BaftEditor submit={goMark} />
      </Form>

      <Modal
        title="添加文档类型"
        okType="primary"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={modalFinish}>
          <Form.Item label="类型名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="类型key" name="code">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
