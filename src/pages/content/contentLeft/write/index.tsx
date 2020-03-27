import React from "react";
import { Comment, Avatar, List } from "antd";
import moment from "moment";
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
    content: "丁少华说的对哈哈哈哈哈哈",
    time: "2020-03-08",
    header: "http://www.hhan.top/wp-content/uploads/header.jpeg"
  }
];

class Write extends React.Component {
  actions = [
    <span>
      <SmileTwoTone twoToneColor="#E889B7" />
      <span className={style.commentAction}>1</span>
    </span>,
    <span>
      <FrownTwoTone twoToneColor="#FFAC56" />
      <span className={style.commentAction}>0</span>
    </span>
  ];

  render() {
    return (
      <div>
        <List
          dataSource={data}
          renderItem={item => (
            <li>
              <Comment
                actions={this.actions}
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
  }
}

export default Write;
