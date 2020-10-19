import React, { useState, useEffect } from "react";
import { Menu, Row, Col, Tooltip } from "antd";
import { Link, withRouter } from "react-router-dom";

import { menus } from "./model";
import style from "./style.module.less";
import IconFont from "@components/myIconfont";
import history from "@util/history";
import api from "@api/api-ins";

const Nav = (props: any) => {
  const [current, setCurrent] = useState<string>("mark");
  const [user, setUser] = useState<User>();
  const [opacity, setOpacity] = useState<number>(0.7)
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    getUser();
    setNavHlight(pathname);
    window.onscroll = () => {
      let opacitys = document.documentElement.scrollTop < (document.body.offsetHeight - 80) ? 0.7 : 1
      setOpacity(opacitys)
    }
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

  //退出登录
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  //跳转后台
  const goAdmin = async () => {
    const res: any = await api.tokenCheck.req()
    if (res.status === 601) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } else {
      history.push("/admin");
    }
  }

  return (
    <div className={style.nav} style={{ opacity: opacity }}>
      <Row className={style.navCont}>
        {/* 后台入口 */}
        {user && (
          <div className={style.navRight}>
            <a className={style.navGoAdmin} onClick={goAdmin}>
              <IconFont type="icon-tuzi" />
            </a>
            <div className={style.navContText}>
              <b>{user.name} 你来啦～</b>
              <span onClick={logout}>
                <IconFont type="icon-tuichu1" />退出
              </span>
            </div>
          </div>
        )}
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
