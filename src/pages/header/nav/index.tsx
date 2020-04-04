import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Tooltip } from "antd";
import { Link, withRouter } from "react-router-dom";

import { navRight, menus } from "./model";
import style from "./style.less";
import qqImg from "@assets/images/qq.jpg";
import wechatImg from "@assets/images/wechat.jpg";
import IconFont from "@components/myIconfont";

const Nav = (props: any) => {
  const [current, setCurrent] = useState<string>("mark");
  const {
    location: { pathname }
  } = props;

  useEffect(() => {
    const currNavIdx = menus.findIndex(item => item.path === pathname);
    if (menus[currNavIdx]) {
      setCurrent(menus[currNavIdx].id);
    } else {
      setCurrent("");
    }
  }, [pathname]);

  return (
    <div className={style.nav}>
      <Tooltip title="进入后台～">
        <a className={style.navGoAdmin} href="/admin">
          <IconFont type="icon-tuzi" />
        </a>
      </Tooltip>
      <Row className={style.navCont}>
        <Col span={6} className={style.navRight}>
          {navRight.map(item => (
            <Tooltip title={item.title} key={item.title}>
              <a
                className={style.navRightImg}
                href={item.href}
                target="blank"
                key={item.href}
              >
                <img src={item.img} alt={item.title} />
              </a>
            </Tooltip>
          ))}
          <span className={style.navRightImg} title="复制QQ">
            <img src={qqImg} alt="QQ" />
          </span>
          <span className={style.navRightImg} title="扫码加微信">
            <img src={wechatImg} alt="微信二维码" />
          </span>
        </Col>
        <Col span={18} className={style.navLeft}>
          <Menu selectedKeys={[current]} mode="horizontal">
            {menus.map(item => (
              <Menu.Item key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Nav);
