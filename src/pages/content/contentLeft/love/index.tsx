import React, { useEffect, useState } from "react";
import moment from "moment";

import style from "./style.module.less";
import dImg from "@assets/images/d-header.png";
import yImg from "@assets/images/y-header.png";
import IconFont from "@components/myIconfont";

export default () => {
  const [weLove, setWeLove] = useState(0);
  const [goTime, setGoTime] = useState(0);

  useEffect(() => {
    const getTime = setInterval(() => {
      setWeLove(moment().diff(moment("2019-10-10 16:25:20"), "seconds"));
      setGoTime(moment().diff(moment("2018-08-26 00:00:00"), "seconds"));
    }, 1000);

    return () => {
      clearTimeout(getTime);
    };
  }, []);

  return (
    <div className={`card ${style.love}`}>
      <div className={style.loveHeart}>
        <div className={style.loveHeartHeader}>
          <div>
            <img src={dImg} alt="头像" />
          </div>
          <div>
            <IconFont
              type="icon-weibiaoti-"
              className={style.loveHeartHeaderFont}
            />
          </div>
          <div>
            <img src={yImg} alt="头像" />
          </div>
        </div>
        <p>我们已甜甜的恋爱{weLove}秒</p>
      </div>
      <div className={style.loveGoTime}>本站已萌萌哒运行{goTime}秒</div>
    </div>
  );
};
