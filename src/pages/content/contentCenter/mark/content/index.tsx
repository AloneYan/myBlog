import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import IconFont from "@components/myIconfont";
import Footer from "@components/contentFooter";
import style from "./style.less";

export default () => {
  return (
    <div className={style.content}>
      <div className={style.contentBread}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={style.contentHeader}>
        React高阶成长计划
        <span>
          <IconFont type="icon-zuozhe" />
          @兔纸
        </span>
        <div className={style.contentOther}>
          <span>
            <IconFont type="icon-riqi" />
            2020-01-20
          </span>
          <span>
            <IconFont type="icon-yuedu" />
            200次阅读
          </span>
        </div>
      </div>
      <div className={style.contentCont}>
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      </div>
      <Footer />
    </div>
  );
};
