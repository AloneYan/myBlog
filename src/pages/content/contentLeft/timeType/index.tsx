import React from "react";
import { Timeline } from "antd";

import style from "./style.module.less";
import IconFont from "@components/myIconfont";

const data = [
  {
    time: "2020年2月",
    num: 20,
  },
  {
    time: "2020年6月",
    num: 20,
  },
  {
    time: "2020年1月",
    num: 20,
  },
];
export default () => {
  return (
    <div className="card">
      <div className={style.timeHeader}>
        <IconFont type="icon-leimupinleifenleileibie" />
        文档日期
      </div>
      <Timeline className={style.timeList}>
        {data.map((item) => (
          <Timeline.Item key={item.time} dot={<IconFont type="icon-riqi1" />}>
            {item.time}
            <span>（{item.num}）</span>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
