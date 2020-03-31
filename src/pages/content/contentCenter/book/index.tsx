import React from "react";
import { List } from "antd";
import cs from "classnames";

import style from "./style.less";
import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";

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
    start: "2",
    content: "这本书主要讲了呀呀呀呀呀呀哈哈哈哈哈哈哈",
    bookImg: "http://www.hhan.top/wp-content/uploads/2020/03/timg-1.jpeg"
  }
];
export default () => {
  const setStart = (num: number | string) => {
    let dom = [];
    for (let i = 0; i < num; i++) {
      dom.push(<IconFont type="icon-xing1" key={i} />);
    }
    return dom;
  };

  return (
    <>
      <List
        dataSource={data}
        renderItem={item => (
          <div className={cs("card", style.book, "clearfix")}>
            <div className={`${style.bookImg}`}>
              <img src={item.bookImg} alt="封面" />
            </div>
            <ul className={style.bookCont}>
              <li className={style.bookContName}>
                <span>
                  <IconFont type="icon-shu" />
                  书名：
                </span>
                {item.bookName}
              </li>
              <li className={style.bookContAuthor}>
                <span>
                  <IconFont type="icon-zuozhe" />
                  作者：
                </span>
                {item.author}
              </li>
              <li className={style.bookContAuthor}>
                <span>
                  <span>
                    <IconFont type="icon-tuijian" />
                    推荐：
                  </span>
                  {setStart(item.start)}
                </span>
              </li>
            </ul>
            <ListFooter
              {...{
                time: "2020-03-30",
                look: 2000,
                good: 2,
                talk: 12
              }}
            />
          </div>
        )}
      ></List>
    </>
  );
};
