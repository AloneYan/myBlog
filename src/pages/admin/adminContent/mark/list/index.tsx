import React from "react";
import { Table, Button } from "antd";

import style from "./style.less";
import { columns, data } from "./model";

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(selectedRows);
  }
};
export default () => {
  return (
    <div className={style.markList}>
      <div>
        <Button type="primary">新建</Button>
      </div>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};
