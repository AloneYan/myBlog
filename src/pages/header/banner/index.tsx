import React from "react";
import style from "./style.less";

export default () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerPosition}>
        <div className={style.bannerText}>
          <h2>睡不够的程序员</h2>
          <span>假装我是一个认真学习的小可爱</span>
        </div>
      </div>
      <div className={style.bannerImg}></div>
    </div>
  );
};
