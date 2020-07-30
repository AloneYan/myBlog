import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";

import style from "./style.module.less";
import IconFont from "@components/myIconfont";

const Nav = (props: any) => {
  const { SubMenu } = Menu;

  const handleClick = (e: any) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ height: "100vh" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <div className={style.adminNavLogo}>
        <IconFont type="icon-tuzi" />
      </div>
      <Menu.Item key="1">
        <Link to="/admin">首页</Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={
          <span>
            <span>发布文章</span>
          </span>
        }
      >
        <Menu.Item key="mark">
          <Link to="/admin/mark">文档</Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/admin/book">书单</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <span>设置</span>
          </span>
        }
      >
        <Menu.Item key="param">
          <Link to="/admin/param">参数管理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};
export default withRouter(Nav);
