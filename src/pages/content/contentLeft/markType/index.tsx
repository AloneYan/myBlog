import React, { useEffect, useState } from "react";

import api from "@api/api-ins";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";

export default () => {
  const [list, setList] = useState([])
  useEffect(() => {
    getMarkType()
  }, [])

  //获取列表
  const getMarkType = async () => {
    const res: any = await api.blogType.req()
    if (res.status === 200) {
      setList(res.data.blogGroupBy)
    }
  }

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
          <div key={item.dicName}>
            <span className={style.myIconfont}>
              <IconFont type="icon-wenjianjia" />
            </span>
            {item.dicName}
            <span>（{item.total}）</span>
          </div>
        ))}
      </div>
    </div>
  );
};

