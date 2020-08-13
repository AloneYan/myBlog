import React, { useState, useEffect } from "react";
import BaftEditor from "@components/baftEditor";
import {
  Form,
  Input,
  Select,
  Modal,
  Button,
  Spin,
  message,
  Upload,
} from "antd";

import style from "./style.module.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";
import api from "@api/api-ins";
import { createForm } from "rc-form";

interface GoMark {}

export default (props: any) => {
  const [typeList, setTypeList] = useState([]);
  const [visible, setVisible] = useState(false);
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
  //获取书单内容
  const getOne = async (id: any) => {
    const res = await api.book.getOne.req({ id });
    setRes(res.data);
    setLoading(false);
  };
  //添加书单类型对话框
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const modalFinish = async (val: any) => {
    val.type = "book";
    const res: any = await api.book.save.req(val);
    if (res.status === 200) {
      message.success("保存成功");
      getTypeList();
      setVisible(false);
    }
  };
  //获取书单类型列表
  const getTypeList = async () => {
    const res: any = await api.dicts.list.req({ type: "book" });
    if (res.status === 200) {
      setTypeList(res.data);
    }
  };
  //获取富文本内容
  const baftEditorChange = (val: string) => {
    fwbCont = val;
  };
  //返回列表跳转
  const addReturn = () => {
    history.push("/admin/book");
  };
  const ExportForm = createForm()(((prop: any) => {
    const { getFieldDecorator, setFieldsValue } = prop.form;
    //发布
    const onFinish = async () => {
      if (fwbCont !== "") {
        const param = { ...prop.form.getFieldsValue(), content: fwbCont };
        param.id = props.location.state;
        const res: any = await (props.location.state
          ? api.book.update.req(param)
          : api.book.save.req(param));
        if (res.status === 200) {
          message.success("发布成功");
          addReturn();
        }
      }
    };
    return (
      <Form onFinish={onFinish}>
        <Form.Item label="名称">
          {getFieldDecorator("name", {
            initialValue: res?.name ? res.name : "",
            rules: [
              {
                required: true,
                message: "请填写书名/剧名",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="作者">
          {getFieldDecorator("author", {
            initialValue: res?.author ? res.author : "",
            rules: [
              {
                required: true,
                message: "请填写作者",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="推荐指数">
          {getFieldDecorator("star", {
            initialValue: res?.star ? res.star : "",
            rules: [
              {
                required: true,
                message: "请填推荐星级",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <div className={style.addIcontNext}>
          <Form.Item label="类型">
            {getFieldDecorator("type", {
              initialValue: res?.type ? Number(res.type) : "",
              rules: [{ required: true, message: "请选择类型" }],
            })(
              <Select placeholder="请选择类型">
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
        <BaftEditor change={baftEditorChange} content={res?.content} />
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
          title="添加书单类型"
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
