import React from "react";
import { List } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

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
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1720468_6jbg9whahvn.js"
  });

  return (
    <div>
      <List
        dataSource={data}
        renderItem={item => (
          <div className={`card ${style.book} clearfix`}>
            <div className={`${style.bookImg}`}>
              <img src={item.bookImg} alt="封面" />
            </div>
            <div className={style.bookFooter}>
              <span className={style.bookFooterCont}>
                <IconFont type="icon-riqi" />
                2020-03-28
              </span>
              <span className={style.bookFooterCont}>
                <IconFont type="icon-yuedu" />
                114次阅读
              </span>
              <span className={style.bookFooterCont}>
                <IconFont type="icon-dianzan" />
                2人点赞
              </span>
              <span className={style.bookFooterCont}>
                <IconFont type="icon-pinglun" />
                2人评论
              </span>
            </div>
          </div>
        )}
      ></List>
    </div>
  );
};
