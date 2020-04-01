import React from "react";
import { Button } from "antd";

import BaftEditor from "@components/baftEditor";
import style from "./style.less";

export default () => {
  return (
    <div>
      <BaftEditor />
      <div className={style.everyButton}>
        <Button type="primary">发布</Button>
      </div>
    </div>
  );
};
