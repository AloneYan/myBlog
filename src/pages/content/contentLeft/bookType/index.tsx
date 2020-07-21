import React from "react";

import IconFont from "@components/myIconfont";
import style from "./style.less";

const data = [
  {
    name: "时间效率和自律",
    num: 0
  },
  {
    name: "国产小说",
    num: 12
  },
  {
    name: "程序媛养成计划",
    num: 2
  }
];

export default () => {
  return (
    <div className="card">
      <div className={style.typeHeader}>
        <IconFont type="icon-leimupinleifenleileibie" />
        书单分类
      </div>
      <div className={style.typeList}>
        {data.map(item => (
          <div key={item.name}>
            <IconFont type="icon-shu1" />
            {item.name}
            <span>（{item.num}）</span>
          </div>
        ))}
      </div>
    </div>
  );
};
