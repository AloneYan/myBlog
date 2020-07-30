import React, { useEffect, useState } from "react";
import { List, Rate } from "antd";
import moment from "moment";
import cs from "classnames";

import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";
import history from "@util/history";
import bookApi from "@api/book-api";

export default () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  //获取书单列表
  const getList = async () => {
    const res = await bookApi.getList();
    if (res.data.status === 200) {
      setList(res.data.data);
    }
  };
  //跳转书单详情
  const goContent = (id: string | number) => {
    history.push({
      pathname: "/content",
      state: id,
    });
  };
  return (
    <>
      <List
        dataSource={list}
        renderItem={(item: any) => (
          <div
            className={cs("card", style.book, "clearfix")}
            onClick={() => {
              goContent(item.id);
            }}
          >
            <div className={`${style.bookImg}`}>
              <img src={item.bookImg} alt="封面" />
            </div>
            <ul className={style.bookCont}>
              <li className={style.bookContName}>
                <span>书名：</span>
                {item.name}
              </li>
              <li className={style.bookContAuthor}>
                <span>作者：</span>
                {item.author}
              </li>
              <li className={style.bookContAuthor}>
                <span>
                  <span>推荐：</span>
                  <Rate
                    disabled
                    defaultValue={item.star}
                    character={<IconFont type="icon-tuzi1" />}
                  />
                </span>
              </li>
            </ul>
            <ListFooter
              {...{
                time: moment(item.createTime).format("YYYY-MM-DD"),
                look: item.readNum,
                good: item.loveNum,
                talk: item.commentNum,
              }}
            />
          </div>
        )}
      ></List>
    </>
  );
};
