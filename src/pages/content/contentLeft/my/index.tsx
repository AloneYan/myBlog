import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setBlogGroupBy } from "../../../../redux";
import style from "./style.module.less";
import history from "@util/history";
import IconFont from "@components/myIconfont";
import api from "@api/api-ins";

const My = (props: any) => {
  const [userInfo, setUserInfo] = useState<any>('')
  useEffect(() => {
    getInfo()
  }, [])
  //获取站长信息
  const getInfo = async () => {
    const res: any = await api.baseInfo.req()
    if (res.status === 200) {
      setUserInfo(res.data)
      props.setBlogGroupBy(res.data.blogGroupBy);
    }
  }
  //跳转登录
  const goLogin = () => {
    history.push("/login");
  };
  //跳转简历
  const goCV = () => {
    history.push("/CV");
  };

  return (
    <div className="card">
      <div className={style.my}>
        <div className={style.myBackground}></div>
        <div className={style.myHeader}>
          <span onClick={goLogin}>
            <img
              src={userInfo.hdimg}
              alt="头像"
            />
            <span className={style.myName}>@{userInfo.uname}</span>
          </span>
        </div>
        <div className={style.myText}>
          <a href="/mark">
            <p className={style.myTextNum}>{userInfo.blogsCount}</p>
            <p className={style.myTextTitle}>文档</p>
          </a>
          <a href="/book">
            <p className={style.myTextNum}>{userInfo.booksCount}</p>
            <p className={style.myTextTitle}>书单</p>
          </a>
          <a href="/">
            <p className={style.myTextNum}>{userInfo.views}</p>
            <p className={style.myTextTitle}>浏览</p>
          </a>
        </div>
        <div className={style.link}>
          <ul>
            <li onClick={goCV}>
              <IconFont type="icon-tuzi2" />
            </li>
            <li>
              <IconFont type="icon-QQ" />
            </li>
            <li>
              <IconFont type="icon-weixin" />
            </li>
            <li>
              <a target="blank" href="https://github.com/rabbit-y">
                <IconFont type="icon-github" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://blog.csdn.net/YanH_an">
                <IconFont type="icon-csdn" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
//存放blogGroupBy数据
export default connect(null, (dispatch: any) => ({
  setBlogGroupBy(blogGroupBy: any) {
    dispatch(setBlogGroupBy({ blogGroupBy }));
  },
}))(My);
