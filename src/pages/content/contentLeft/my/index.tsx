import React from "react";
import style from "./style.less";

export default () => {
  return (
    <div className="card">
      <div className={style.my}>
        <div className={style.myBackground}></div>
        <div className={style.myHeader}>
          <a href="/login">
            <img
              src="http://www.hhan.top/wp-content/uploads/header.jpeg"
              alt="头像"
            />
            <span>@兔纸</span>
          </a>
        </div>
        <div className={style.myText}>
          <a href="/app/mark">
            <p className={style.myTextNum}>10</p>
            <p className={style.myTextTitle}>文档</p>
          </a>
          <a href="/app/book">
            <p className={style.myTextNum}>4</p>
            <p className={style.myTextTitle}>书单</p>
          </a>
          <a href="/app">
            <p className={style.myTextNum}>123920</p>
            <p className={style.myTextTitle}>浏览</p>
          </a>
        </div>
      </div>
    </div>
  );
};
