import React, { useState, useEffect } from "react";
import BaftEditor from "@components/baftEditor";
import { Form, Input, Select, Modal, Button, Spin, message } from "antd";

import style from "./style.less";
import Iconfont from "@components/myIconfont";
import history from "@util/history";
import bookApi from "@api/book-api";
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
    const res = await bookApi.getBook({ id: id });
    setRes(res.data.data);
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
    const res = await bookApi.saveMarkType(val);
    if (res.data.status === 200) {
      message.success("保存成功");
      getTypeList();
      setVisible(false);
    }
  };
  //获取书单类型列表
  const getTypeList = async () => {
    const res = await bookApi.getMarkTypeList({ type: "book" });
    if (res.data.status === 200) {
      setTypeList(res.data.data);
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
        if (!props.location.state) {
          const res = await bookApi.saveBook(param);
          if (res.data.status === 200) {
            message.success("发布成功");
            addReturn();
          }
        } else {
          param.id = props.location.state;
          const res = await bookApi.updateBook(param);
          if (res.data.status === 200) {
            message.success("修改成功");
            addReturn();
          }
        }
      }
    };
    return (
      <Form onFinish={onFinish}>
        <Form.Item label="书单名称">
          {getFieldDecorator("name", {
            initialValue: res?.bookName ? res.bookName : "",
            rules: [
              {
                required: true,
                message: "请填写书名",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="书单作者">
          {getFieldDecorator("author", {
            initialValue: res?.bookAuthor ? res.bookAuthor : "",
            rules: [
              {
                required: true,
                message: "请填写书单作者",
                validateTrigger: "onBlur",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="推荐指数">
          {getFieldDecorator("star", {
            initialValue: res?.bookStar ? res.bookStar : "",
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
          <Form.Item label="书单类型">
            {getFieldDecorator("type", {
              initialValue: res?.type ? res.type : "",
              rules: [{ required: true, message: "请选择书单类型" }],
            })(
              <Select placeholder="请选择书单类型">
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
