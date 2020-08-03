import React, { useEffect, useState } from "react";
import moment from "moment";

import style from "./style.module.less";
import IconFont from "@components/myIconfont";
import api from "@api/api-ins";

export default () => {
  useEffect(() => {
    getList();
  }, []);
  const [list, setList] = useState([]);
  const getList = async () => {
    const res: any = await api.mood.list.req();
    if (res.status === 200) {
      setList(res.data);
    }
  };
  return (
    <div className={`card ${style.every}`}>
      {list.map((item: any) => (
        <div className={style.everyList} key={item.id}>
          <div className={style.delet}>删除</div>
          <div className={style.everyName}>
            <div className={style.everyNameLeft}>
              <img src={item.headImg} alt="头像" />
            </div>
            <div className={style.everyNameRight}>
              <b>@{item.name}</b>
              <span>{moment(item.createTime).fromNow()}</span>
            </div>
          </div>
          <div
            className={style.everyContent}
            dangerouslySetInnerHTML={{
              __html: item.msg,
            }}
          ></div>
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
