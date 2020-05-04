import React, { useState, useEffect } from "react";
import { Comment, Avatar, List, message } from "antd";
import moment from "moment";

import writeApi from "@api/write-api";
import MyComment from "@components/comment";
import style from "./style.less";

export default () => {
  const [list, setList] = useState<Array<object>>();

  useEffect(() => {
    getList();
  }, []);

  //提交评论
  const onSubmit = async (msg: string, callBack: Function) => {
    const res = await writeApi.saveWrite({
      msg: msg,
    });
    if (res.data.status === 200) {
      message.success("评论成功");
      getList();
      callBack();
    }
  };
  //获取评论列表
  const getList = async () => {
    const res = await writeApi.getWrite();
    if (res.data.status === 200) {
      setList(res.data.data);
    }
  };

  return (
    <div className={`card ${style.write}`}>
      <MyComment onSubmit={onSubmit} />
      <List
        dataSource={list}
        renderItem={(item: any) => (
          <li>
            <Comment
              author={<span>{item.name}</span>}
              avatar={<Avatar src={item.headImg} alt={item.name} />}
              content={<p>{item.msg}</p>}
              datetime={<span>{moment(item.createTime).fromNow()}</span>}
            >
              {item.msg === "1111" && (
                <Comment
                  author={<span>{item.name}</span>}
                  avatar={<Avatar src={item.headImg} alt={item.name} />}
                  content={<p>{item.msg}</p>}
                  datetime={<span>{moment(item.createTime).fromNow()}</span>}
                />
              )}
            </Comment>
          </li>
        )}
      ></List>
    </div>
  );
};
