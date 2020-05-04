import React from "react";
import { Breadcrumb, message } from "antd";
import { HomeOutlined } from "@ant-design/icons";

import IconFont from "@components/myIconfont";
import Footer from "@components/contentFooter";
import MyComment from "@components/comment";
import style from "./style.less";

export default () => {
  //提交评论
  const onSubmit = async (msg: string, callBack: Function) => {
    // const res = await writeApi.saveWrite({
    //   msg: msg,
    // });
    // if (res.data.status === 200) {
    //   message.success("评论成功");
    //   getList();
    //   callBack();
    // }
  };

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
      <MyComment onSubmit={onSubmit} />
    </div>
  );
};
