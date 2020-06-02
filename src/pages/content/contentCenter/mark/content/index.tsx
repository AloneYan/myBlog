import React, { useEffect, useState } from "react";
import { Breadcrumb, message } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import moment from "moment";

import IconFont from "@components/myIconfont";
import Footer from "@components/contentFooter";
import MyComment from "@components/comment";
import markApi from "@api/mark-api";
import style from "./style.less";

export default (props: any) => {
  const [markContent, setContent] = useState<any>([]);
  useEffect(() => {
    if (props.location.state) {
      getContent(props.location.state);
    } else {
    }
  }, [props]);
  const getContent = async (id: string | number) => {
    const params = {
      id: id,
    };
    const res = await markApi.getMark(params);
    setContent(res.data.data);
  };
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
          <Breadcrumb.Item>
            <span>{markContent.type}</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{markContent.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={style.contentHeader}>
        {markContent.title}
        <span>
          <IconFont type="icon-zuozhe" />
          @兔纸
        </span>
        <div className={style.contentOther}>
          <span>
            <IconFont type="icon-riqi" />
            {moment(markContent.createTime).format("YYYY-MM-DD hh:mm:ss")}
          </span>
          <span>
            <IconFont type="icon-yuedu" />
            {markContent.readNum}次阅读
          </span>
        </div>
      </div>
      <pre>
        <div
          className={style.contentCont}
          dangerouslySetInnerHTML={{ __html: markContent.content }}
        ></div>
      </pre>
      <Footer />
      <MyComment onSubmit={onSubmit} />
    </div>
  );
};
