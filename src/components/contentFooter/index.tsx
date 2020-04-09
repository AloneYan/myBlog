import React from "react";

import IconFont from "@components/myIconfont";
import style from "./style.less";

export default (props: any) => {
  return (
    <>
      <div className={style.contentShare}>
        <div>
          点赞
          <IconFont type="icon-dianzan1" />
        </div>
        <div className={style.contentShareTwo}>
          打赏
          <IconFont type="icon-dashang" />
        </div>
        <div>
          分享
          <IconFont type="icon-fenxiang" />
        </div>
      </div>
    </>
  );
};
