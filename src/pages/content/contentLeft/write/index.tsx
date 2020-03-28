import React from "react";
import { Comment, Avatar, List, Form, Button, Input } from "antd";
import { SmileTwoTone, FrownTwoTone } from "@ant-design/icons";

import style from "./style.less";

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
  const actions: JSX.Element[] = [
    <span>
      <SmileTwoTone twoToneColor="#E889B7" />
      <span className={style.commentAction}>1</span>
    </span>,
    <span>
      <FrownTwoTone twoToneColor="#FFAC56" />
      <span className={style.commentAction}>0</span>
    </span>
  ];

  return (
    <div className={`card ${style.write}`}>
      <div className={style.writeTextarea}>
        <Form.Item>
          <Input.TextArea rows={4} placeholder="来这里尽情的夸赞兔子小姐吧～" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            夸她
          </Button>
        </Form.Item>
      </div>
      <List
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              actions={actions}
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
