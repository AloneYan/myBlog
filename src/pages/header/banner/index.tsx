import Iconfont from '@components/myIconfont';
import React, { useEffect, useState } from "react";

import style from "./style.module.less";

export default () => {
  useEffect(() => {

  }, []);
  // 锚点跳转
  const goJump = () => {
    const anchorElement: any = document.getElementById('jumps');
    anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
  return (
    <div className={style.banner}>
      {/* 蒙层 */}
      <div className={style.bannerPosition}></div>
      {/* 波浪特效 */}
      <div>
        <i className={style.wave1}></i>
        <i className={style.wave2}></i>
      </div>
      {/* 向下按钮 */}
      <div className={style.down} onClick={goJump}>
        <Iconfont type="icon-shuangjiantouwangxia" />
      </div>
      <div id="jumps" className={style.jump} >锚点位置</div>
      {/* 背景图 */}
      <div className={style.bannerImg}></div>
    </div>
  );
};
