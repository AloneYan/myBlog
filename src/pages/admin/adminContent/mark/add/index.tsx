import React, { useState, useEffect } from "react";
// import marked from "marked";
import { Form, Input, Select, Modal, Button, message, Spin } from "antd";
import SimpleMDE from "react-simplemde-editor";

import style from "./style.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";
import markApi from "@api/mark-api";
import { createForm } from "rc-form";

interface GoMark {}

export default (props: any) => {
  const [visible, setVisible] = useState(false);
  const [typeList, setTypeList] = useState([]);
  const [res, setRes] = useState<any>();
  const [loading, setLoading] = useState(false);
  let fwbCont = "";

  useEffect(() => {
    getTypeList();
    if (props.location.state) {
      setLoading(true);
      getOne(props.location.state);
    } else {
    }
  }, [props]);

  const getOne = async (id: any) => {
    const params = {
      id: id,
    };
    const res = await markApi.getMark(params);
    setRes(res.data.data);
    setLoading(false);
  };

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
    if (res.data.status === 200) {
      message.success("保存成功");
      getTypeList();
      setVisible(false);
    }
  };
  //获取文档类型列表
  const getTypeList = async () => {
    const res = await markApi.getMarkTypeList({ type: "mark" });
    if (res.data.status === 200) {
      setTypeList(res.data.data);
    }
  };
  //获取markdown内容
  const test = (val: any) => {
    fwbCont = val;
  };

  //返回列表跳转
  const addReturn = () => {
    history.push("/admin/mark");
  };

  const ExportForm = createForm()(((prop: any) => {
    const { getFieldDecorator, setFieldsValue } = prop.form;
    //发布/更新
    const onFinish = async () => {
      if (fwbCont !== "") {
        const param = {
          ...prop.form.getFieldsValue(),
          content: fwbCont,
          id: props.location.state,
        };
        const res = await (props.location.state
          ? markApi.updateMark(param)
          : markApi.saveMark(param));
        if (res.data.status === 200) {
          message.success("发布成功");
          addReturn();
        }
      }
    };
    return (
      <Form onFinish={onFinish}>
        <Form.Item label="文档题目">
          {getFieldDecorator("title", {
            initialValue: res?.title ? res.title : "",
            rules: [
              {
                required: true,
                message: "请填写文章题目",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <div className={style.addIcontNext}>
          <Form.Item label="文档类型">
            {getFieldDecorator("type", {
              initialValue: res?.type ? res.type : "",
              rules: [{ required: true, message: "请选择文档类型" }],
            })(
              <Select placeholder="请选择文档类型">
                {typeList.map((item: any) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.name}
                  </Select.Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <div className={style.addIcont} onClick={showModal}>
            <Iconfont type="icon-tianjia" />
          </div>
        </div>
        <SimpleMDE onChange={test} value={res?.content ? res.content : ""} />
        <div className={style.everyButton}>
          <Button type="primary" htmlType="submit">
            发布
          </Button>
        </div>
      </Form>
    );
  }) as any);
  return (
    <Spin tip="加载中..." spinning={loading}>
      <div className={style.add}>
        <div className={style.addReturn} onClick={addReturn}>
          <Iconfont type="icon-tuichu" />
        </div>
        <ExportForm />
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
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Spin>
  );
};
