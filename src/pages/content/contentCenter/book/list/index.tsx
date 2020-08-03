import React, { useEffect, useState } from "react";
import { List, Rate } from "antd";
import moment from "moment";
import cs from "classnames";

import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";
import history from "@util/history";
import api from "@api/api-ins";

export default () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);
  //获取书单列表
  const getList = async () => {
    const res: any = await api.book.list.req();
    if (res.status === 200) {
      setList(res.data);
    }
  };
  //跳转书单详情
  const goContent = (id: number) => {
    history.push({
      pathname: "/book/content",
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
