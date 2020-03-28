import React, { useState, useEffect } from "react";
import style from "./style.less";
import { Menu, Row, Col } from "antd";
import { Link, withRouter } from "react-router-dom";
import { navRight, menus } from "./model";

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
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(Nav);
