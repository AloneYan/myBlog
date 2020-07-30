import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Tooltip } from "antd";
import { Link, withRouter } from "react-router-dom";

import { menus } from "./model";
import style from "./style.module.less";
import IconFont from "@components/myIconfont";

const Nav = (props: any) => {
  const [current, setCurrent] = useState<string>("mark");
  const [user, setUser] = useState<User>();
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    getUser();
    setNavHlight(pathname);
  }, [pathname]);

  // 导航高亮匹配
  const setNavHlight = (pathname: string) => {
    for (const item in menus) {
      const id = menus[item].id;
      if (pathname.indexOf(id) !== -1) {
        setCurrent(id);
        break;
      } else {
        setCurrent("mark");
      }
    }
  };

  //获取用户信息
  const getUser = () => {
    if (localStorage.user) {
      const user = JSON.parse(localStorage.user);
      setUser(user);
    }
  };

  return (
    <div className={style.nav}>
      {user && (
        <Tooltip title="进入后台～">
          <a className={style.navGoAdmin} href="/admin">
            <IconFont type="icon-tuzi" />
          </a>
        </Tooltip>
      )}

      <Row className={style.navCont}>
        {/* 分类导航 */}
        <Col span={24} className={style.navLeft}>
          <Menu selectedKeys={[current]} mode="horizontal">
            {menus.map((item) => (
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
