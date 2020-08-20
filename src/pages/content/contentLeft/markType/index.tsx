import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import IconFont from "@components/myIconfont";
import style from "./style.module.less";

const data = [
  {
    name: "Vue",
    num: 0,
  },
  {
    name: "TypeScript",
    num: 12,
  },
  {
    name: "小程序",
    num: 2,
  },
  {
    name: "JavaScript",
    num: 10,
  },
];

const MarkType = (props: any) => {
  const [list, setList] = useState<any>([])
  useEffect(() => {
    setList(props.blogGroupBy)
    setTimeout(() => {
      console.log(props)
    }, 5000)
  }, [])

  return (
    <div className="card">
      <div className={style.typeHeader}>
        <span className={style.myIconfont}>
          <IconFont type="icon-leimupinleifenleileibie" />
        </span>
        文档分类
      </div>
      <div className={style.typeList}>
        {list.map((item: any) => (
          <div key={item.name}>
            <span className={style.myIconfont}>
              <IconFont type="icon-wenjianjia" />
            </span>
            {item.name}
            <span>（{item.num}）</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    blogGroupBy: state.common.blogGroupBy,
  }),
  null
)(MarkType);
