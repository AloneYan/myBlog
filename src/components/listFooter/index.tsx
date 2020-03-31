import React from "react";
import cs from "classnames";

import style from "./style.less";
import IconFont from "@components/myIconfont";

export default (props: ListFooter) => {
  const { time, look, good, talk } = props;

  return (
    <div className={style.footer}>
      <span className={style.footerCont}>
        <IconFont type="icon-riqi" />
        {time}
      </span>
      <span className={style.footerCont}>
        <IconFont type="icon-yuedu" />
        {look}次阅读
      </span>
      <span className={style.footerCont}>
        <IconFont type="icon-dianzan" />
        {good}人点赞
      </span>
      <span className={style.footerCont}>
        <IconFont type="icon-pinglun" />
        {talk}人评论
      </span>
      <span className={cs(style.footerCont, style.footerContRight)}>
        查看全文
        <IconFont type="icon-gengduo" />
      </span>
    </div>
  );
};
