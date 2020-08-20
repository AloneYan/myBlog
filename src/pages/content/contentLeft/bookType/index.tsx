import React, { useEffect, useState } from "react";

import api from "@api/api-ins";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";

export default () => {
  const [list, setList] = useState([])
  useEffect(() => {
    getBookType()
  }, [])

  //获取列表
  const getBookType = async () => {
    const res: any = await api.bookType.req()
    if (res.status === 200) {
      setList(res.data.bookGroupBy)
    }
  }

  return (
    <div className="card">
      <div className={style.typeHeader}>
        <span className={style.myIconfont}>
          <IconFont type="icon-leimupinleifenleileibie" />
        </span>
        书单分类
      </div>
      <div className={style.typeList}>
        {list.map((item: any) => (
          <div key={item.dicName}>
            <span className={style.myIconfont}>
              <IconFont type="icon-shu1" />
            </span>
            {item.dicName}
            <span>（{item.total}）</span>
          </div>
        ))}
      </div>
    </div>
  );
};
