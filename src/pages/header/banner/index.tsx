import React, { useEffect, useState } from "react";

import style from "./style.module.less";

export default () => {
  useEffect(() => {

  }, []);
  return (
    <div className={style.banner}>
      {/* 蒙层 */}
      <div className={style.bannerPosition}></div>
      {/* 波浪特效 */}
      <div>
        <i className={style.wave1}></i>
        <i className={style.wave2}></i>
      </div>
      {/* 背景图 */}
      <div className={style.bannerImg}></div>
    </div>
  );
};
