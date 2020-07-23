import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import moment from "moment";
import marked from "marked";
import hljs from "highlight.js";

import IconFont from "@components/myIconfont";
import Footer from "@components/contentFooter";
import MyComment from "@components/comment";
import markApi from "@api/mark-api";
import style from "./style.less";

export default (props: any) => {
  const [markContent, setContent] = useState<any>([]);
  const [markDown, setMarkDown] = useState("");
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
    setMarkDown(marked(res.data.data.content));
  };
  //提交评论
  const onSubmit = async (msg: string, callBack: Function) => {};

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

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
          <IconFont type="icon-zuozhe1" />
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
      <div
        className={style.contentCont}
        dangerouslySetInnerHTML={{ __html: markDown }}
      ></div>
      <Footer />
      <MyComment onSubmit={onSubmit} />
    </div>
  );
};
