import React from "react";
import style from "./style.module.less";
import history from "@util/history";
import IconFont from "@components/myIconfont";

export default () => {
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
              src="https://dshvv.oss-cn-beijing.aliyuncs.com/yh/1.jpg"
              alt="头像"
            />
            <span className={style.myName}>@兔纸</span>
          </span>
        </div>
        <div className={style.myText}>
          <a href="/mark">
            <p className={style.myTextNum}>10</p>
            <p className={style.myTextTitle}>文档</p>
          </a>
          <a href="/book">
            <p className={style.myTextNum}>4</p>
            <p className={style.myTextTitle}>书单</p>
          </a>
          <a href="/">
            <p className={style.myTextNum}>123920</p>
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
