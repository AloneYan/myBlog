import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";

import headerImg from "@assets/images/header.jpeg";
import style from "./style.module.less";

export default (props: any) => {
  const [msg, setMsg] = useState<string>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUser();
  }, []);

  //获取本地用户信息
  const getUser = () => {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user);
      setUser(user);
    }
  };
  //绑定评论内容
  const textAreaChange = (e: any) => {
    setMsg(e.target.value);
  };
  //保存评论
  const saveComment = () => {
    props.onSubmit(msg, () => {
      setMsg("");
    });
  };
  return (
    <div className={style.comment}>
      <div className={style.commentHeader}>
        <div className={style.commentHeaderLeft}>
          <img src={user ? user.headImg : headerImg} alt="头像" />
        </div>
        <div className={style.commentHeaderRigth}>
          <Input.TextArea
            rows={4}
            value={msg}
            onInput={textAreaChange}
            placeholder="来这里尽情的夸赞兔子小姐吧～"
          />
        </div>
      </div>
      <div className={style.commentButton}>
        <Button onClick={saveComment} type="primary">
          夸她
        </Button>
      </div>
    </div>
  );
};
