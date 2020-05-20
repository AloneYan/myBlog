import React from "react";
import { createFromIconfontCN } from "@ant-design/icons";

export default (props: any) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1720468_1g21lvxvdhi.js",
  });
  return <IconFont type={props.type} />;
};
