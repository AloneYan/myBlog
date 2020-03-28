import React from "react";
import style from "./style.less";

export default () => {
  return (
    <div className="card">
      <div className={style.my}>
        <div className={style.myBackground}></div>
        <div className={style.myHeader}>
          <a href="http://www.hhan.top/wp-content/uploads/header.jpeg">
            <img
              src="http://www.hhan.top/wp-content/uploads/header.jpeg"
              alt="头像"
            />
          </a>
        </div>
        <div className={style.myText}>
          hi！这里是一只来自吉林的小兔子 日常分享学习路上的快乐生活～
        </div>
      </div>
    </div>
  );
};
