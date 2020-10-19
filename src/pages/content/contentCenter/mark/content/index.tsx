import React, { useEffect, useState } from "react";
import { Breadcrumb, Skeleton } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import moment from "moment";
import marked from "marked";
import hljs from "highlight.js";

import IconFont from "@components/myIconfont";
import Footer from "@components/contentFooter";
import MyComment from "@components/comment";
import api from "@api/api-ins";
import style from "./style.module.less";

export default (props: any) => {
  const [markContent, setContent] = useState<any>([]);
  const [markDown, setMarkDown] = useState("");
  useEffect(() => {
    if (props.location.state) {
      getContent(props.location.state);
    } else {
    }
  }, [props]);
  const getContent = async (id: number) => {
    const res: any = await api.blog.getOne.req({ id });
    setContent(res.data);
    setMarkDown(marked(res.data.content));
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
    <div className={`card ${style.content}`}>
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
        {markContent.title?
        <>
        markContent.title
        <span>@兔纸</span>
        <div className={style.contentOther}>
          <span>
            <IconFont type="icon-riqi" />
            {moment(markContent.createTime).format("YYYY-MM-DD hh:mm:ss")}
          </span>
          <span>
            <IconFont type="icon-yuedu" />
            {markContent.readNum}次阅读
          </span>
        </div></>
        :<Skeleton active />}
        
        
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
