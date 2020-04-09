import React, { useState, useEffect } from "react";
import { Comment, Avatar, List, Form, Button, Input, message } from "antd";
// import { SmileTwoTone, FrownTwoTone } from "@ant-design/icons";
import moment from "moment";

import style from "./style.less";
import writeApi from "@api/write-api";

export default () => {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  //绑定评论内容
  const textAreaChange = (e: any) => {
    setMsg(e.target.value);
  };

  //提交评论
  const onSubmit = async () => {
    const user = JSON.parse(localStorage.user);
    const res = await writeApi.saveWrite({
      uid: user.id,
      msg: msg,
    });
    if (res.data.status === 0) {
      message.success("评论成功");
      getList();
      setMsg("");
    }
  };

  //获取评论列表
  const getList = async () => {
    const res = await writeApi.getWrite();
    if (res.data.status === 0) {
      setList(res.data.data);
    }
  };

  return (
    <div className={`card ${style.write}`}>
      <div className={style.writeTextarea}>
        <Form.Item>
          <Input.TextArea
            rows={4}
            value={msg}
            onInput={textAreaChange}
            placeholder="来这里尽情的夸赞兔子小姐吧～"
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={onSubmit} type="primary">
            夸她
          </Button>
        </Form.Item>
      </div>
      <List
        dataSource={list}
        renderItem={(item: any) => (
          <li>
            <Comment
              author={<span>{item.name}</span>}
              avatar={<Avatar src={item.headImg} alt={item.name} />}
              content={<p>{item.msg}</p>}
              datetime={<span>{moment(item.createTime).fromNow()}</span>}
            >
              {item.msg === "1111" && (
                <Comment
                  author={<span>{item.name}</span>}
                  avatar={<Avatar src={item.headImg} alt={item.name} />}
                  content={<p>{item.msg}</p>}
                  datetime={<span>{moment(item.createTime).fromNow()}</span>}
                />
              )}
            </Comment>
          </li>
        )}
      ></List>
    </div>
  );
};
