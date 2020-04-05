import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

export default (props: any) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1720468_9dxqzg2ibfv.js"
  });
  return <IconFont type={props.type} />;
};
