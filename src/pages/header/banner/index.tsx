import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";

import Iconfont from "@components/myIconfont";
import style from "./style.less";

export default () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUser();
  }, []);
  //获取用户信息
  const getUser = () => {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user);
      setUser(user);
    }
  };
  //退出登录
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className={style.banner}>
      <div className={style.bannerPosition}>
        {user && (
          <div className={style.bannerText}>
            <Tooltip placement="bottom" title="退出">
              <span onClick={logout}>
                <Iconfont type="icon-tuichu1" />
              </span>
            </Tooltip>
            <b>hi！@{user.name}</b>
            <img src={user.headImg} alt="头像" />
          </div>
        )}
      </div>
      <div className={style.bannerImg}></div>
    </div>
  );
};
