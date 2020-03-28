import React from "react";
import { List } from "antd";

import style from "./style.less";

const data = [
  {
    bookName: "小狗钱钱",
    author: "安东尼",
    start: "4",
    content: "这本书主要讲了呀呀呀呀呀呀哈哈哈哈哈哈哈",
    bookImg: "http://www.hhan.top/wp-content/uploads/2020/03/timg-1.jpeg"
  },
  {
    bookName: "安东尼没有眼泪",
    author: "安东尼",
    start: "4",
    content: "这本书主要讲了呀呀呀呀呀呀哈哈哈哈哈哈哈",
    bookImg: "http://www.hhan.top/wp-content/uploads/2020/03/timg-1.jpeg"
  }
];
export default () => {
  return (
    <div>
      <List
        dataSource={data}
        renderItem={item => (
          <div className={`card ${style.book} clearfix`}>
            <div className={style.bookImg}>
              <img src={item.bookImg} alt="封面" />
            </div>
          </div>
        )}
      ></List>
    </div>
  );
};
