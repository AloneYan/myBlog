import React, { useEffect, useState } from "react";
import { List, Rate, Row, Col } from "antd";
import moment from "moment";
import cs from "classnames";

import ListFooter from "@components/listFooter";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";
import history from "@util/history";
import api from "@api/api-ins";

export default () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getList();
  }, []);
  //获取书单列表
  const getList = async () => {
    const res: any = await api.book.list.req();
    if (res.status === 200) {
      setList(res.data);
      setLoading(false);
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
        loading={loading}
        renderItem={(item: any) => (
          <div
            className={cs("card", style.book, "clearfix")}
            onClick={() => {
              goContent(item.id);
            }}
          >
            <Row>
              <Col span={10}>
                <div className={style.bookImg}>
                  <img src={item.bookImg} alt="封面" />
                  <div className={style.bookName}>
                    <div className={style.name}>《{item.name}》</div>
                    <div>—— {item.author}</div>
                  </div>
                </div>
              </Col>
              <Col span={14}>
                <div className={style.bookContent}>
                  <Rate
                    disabled
                    defaultValue={item.star}
                    className={style.star}
                    character={<IconFont type="icon-xingshi" />}
                  />
                  <div className={style.content}>{item.des}</div>
                </div>
              </Col>
            </Row>
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
