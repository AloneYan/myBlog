import React, { useState, useEffect } from "react";
import { Menu, Row, Col } from "antd";
import { Link, withRouter } from "react-router-dom";
import { navRight, menus } from "./model";
import style from "./style.less";

import qqImg from "@assets/images/qq.jpg";
import wechatImg from "@assets/images/wechat.jpg";

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
      <Row className={style.navCont}>
        <Col span={16} className={style.navLeft}>
          <Menu selectedKeys={[current]} mode="horizontal">
            {menus.map(item => (
              <Menu.Item key={item.id}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col span={8} className={style.navRight}>
          {navRight.map(item => (
            <a
              className={style.navRightImg}
              href={item.href}
              target="blank"
              title={item.title}
              key={item.href}
            >
              <img src={item.img} alt={item.title} />
            </a>
          ))}
          <span className={style.navRightImg} title="复制QQ">
            <img src={qqImg} alt="QQ" />
          </span>
          <span className={style.navRightImg} title="扫码加微信">
            <img src={wechatImg} alt="微信二维码" />
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Nav);
