import React, { useState } from "react";
import { Comment, Avatar, List, Form, Button, Input } from "antd";
import { SmileTwoTone, FrownTwoTone } from "@ant-design/icons";

import style from "./style.less";
import writeApi from "@api/write-api";

const data = [
  {
    name: "丁少华",
    content: "哈哈哈哈哈博客太好拉",
    time: "2020-03-08",
    header: "http://www.hhan.top/wp-content/uploads/header.jpeg"
  },
  {
    name: "阎涵",
    content:
      "丁少华说的对哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    time: "2020-03-08",
    header: "http://www.hhan.top/wp-content/uploads/header.jpeg"
  }
];

export default () => {
  const [msg, setMsg] = useState("");

  //绑定评论内容
  const textAreaChange = (e: any) => {
    setMsg(e.target.value);
  };

  //提交评论
  const onSubmit = async () => {
    const user = JSON.parse(localStorage.user);
    const res = await writeApi.saveWrite({
      uid: user.id,
      msg: msg
    });
    console.log(res);
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
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              actions={[
                <span>
                  <SmileTwoTone twoToneColor="#E889B7" />
                  <span className={style.commentAction}>1</span>
                </span>,
                <span>
                  <FrownTwoTone twoToneColor="#FFAC56" />
                  <span className={style.commentAction}>0</span>
                </span>
              ]}
              author={<span>{item.name}</span>}
              avatar={<Avatar src={item.header} alt={item.name} />}
              content={<p>{item.content}</p>}
              datetime={<span>{item.time}</span>}
            />
          </li>
        )}
      ></List>
    </div>
  );
};
