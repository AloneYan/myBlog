import React from "react";

import style from "./style.less";
import IconFont from "@components/myIconfont";

const data = [
  {
    id: "1",
    name: "兔纸",
    header: "http://www.hhan.top/wp-content/uploads/header.jpeg",
    content:
      "一点废话 hi！这里是一只96年出生的兔子 日常工作就是写写代码（虽然就是个小白） 日常爱好就是追动漫打游戏（虽然菜的要死） 日常活动就是画画插画（虽然画的超级难看） 大概在我13岁的时候家里有了一台电脑"
  },
  {
    id: "2",
    name: "兔纸",
    header: "http://www.hhan.top/wp-content/uploads/header.jpeg",
    content:
      "一点废话 hi！这里是一只96年出生的兔子 日常工作就是写写代码（虽然就是个小白） 日常爱好就是追动漫打游戏（虽然菜的要死） 日常活动就是画画插画（虽然画的超级难看） 大概在我13岁的时候家里有了一台电脑"
  }
];
export default () => {
  return (
    <div className={`card ${style.every}`}>
      {data.map(item => (
        <div className={style.everyList} key={item.id}>
          <div className={style.everyName}>
            <div className={style.everyNameLeft}>
              <img
                src="http://www.hhan.top/wp-content/uploads/header.jpeg"
                alt="头像"
              />
            </div>
            <div className={style.everyNameRight}>
              <b>@{item.name}</b>
              <span>6小时前</span>
            </div>
          </div>
          <div className={style.everyContent}>{item.content}</div>
          <div className={style.everyFooter}>
            <span className={style.everyFooterCont}>
              <IconFont type="icon-dianzan" />
              2人点赞
            </span>
            <span className={style.everyFooterCont}>
              <IconFont type="icon-pinglun" />
              2人评论
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
