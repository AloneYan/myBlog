import React, { useEffect, useState } from "react";
import { List, Pagination } from "antd";
import moment from "moment";

import style from "./style.module.less";
import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";
import history from "@util/history";
import api from "@api/api-ins";

export default () => {
  const [markList, setList] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMarkList();
  }, []);
  const goContent = (id: string | number) => {
    history.push({
      pathname: "/content",
      state: id,
    });
  };
  //获取文档列表
  const getMarkList = async (e:any=1) => {
    const params: any = {
      current:e,
      size:10
    }
    const res: any = await api.blog.list.req(params);
    if (res.status === 200) {
      setList(res.data);
      setLoading(false);
    }
  };
  return (
    <>
      <List
        dataSource={markList.records}
        loading={loading}
        renderItem={(item: any) => (
          <div
            className={`card ${style.mark}`}
            onClick={() => {
              goContent(item.id);
            }}
          >
            <div className={style.markContent}>
              <div className={style.markContentType}>{item.type}</div>
              <div className={style.markContentName}>
                <IconFont type="icon-tuzi_huaban" />
                <b>{item.title}</b>
              </div>
              <div className={style.markContentAuthor}>@兔纸</div>
              <p className={style.markContentCont}>{item.des}</p>
            </div>
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
      <div className={style.pagination}>
        <Pagination total={markList.total} current={1} pageSize={10} onChange={getMarkList}/>
      </div>
    </>
  );
};
