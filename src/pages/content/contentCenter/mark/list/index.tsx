import React from "react";
import { List } from "antd";

import style from "./style.less";
import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";
import history from "@util/history";

const data = [
  {
    type: "JavaScript",
    author: "阎涵",
    name: "react的高级成长计划",
    content:
      "一点废话 hi！这里是一只96年出生的兔子 日常工作就是写写代码（虽然就是个小白） 日常爱好就是追动漫打游戏（虽然菜的要死） 日常活动就是画画插画（虽然画的超级难看） 大概在我13岁的时候家里有了一台电脑",
  },
  {
    type: "React",
    author: "阎涵",
    name: "react的高级成长计划",
    content:
      "一点废话 hi！这里是一只96年出生的兔子 日常工作就是写写代码（虽然就是个小白） 日常爱好就是追动漫打游戏（虽然菜的要死） 日常活动就是画画插画（虽然画的超级难看） 大概在我13岁的时候家里有了一台电脑",
  },
];

export default () => {
  const goContent = () => {
    history.push("/content");
  };
  return (
    <>
      <List
        dataSource={data}
        renderItem={(item) => (
          <div className={`card ${style.mark}`} onClick={goContent}>
            <div className={style.markContent}>
              <div className={style.markContentName}>
                <span>{item.type}</span>
                <b>{item.name}</b>
              </div>
              <div className={style.markContentAuthor}>
                <IconFont type="icon-zuozhe" />
                {item.author}
              </div>
              <p className={style.markContentCont}>{item.content}</p>
            </div>
            <ListFooter
              {...{
                time: "2020-03-30",
                look: 2000,
                good: 2,
                talk: 12,
              }}
            />
          </div>
        )}
      ></List>
    </>
  );
};
