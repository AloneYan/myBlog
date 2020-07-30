import React from "react";
import { BackTop } from "antd";

import style from "./style.module.less";
import Img from "@assets/images/back-top.gif";

export default () => {
  return (
    <div className={style.backTop}>
      <BackTop>
        <img src={Img} alt="回到顶部" />
      </BackTop>
    </div>
  );
};
