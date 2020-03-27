import React from "react";
import style from "./style.less";
import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import csdnImg from "@assets/images/csdn.jpg";
import githubImg from "@assets/images/github.jpg";
import sinaImg from "@assets/images/sina.jpg";
class Nav extends React.Component {
  state = {
    current: "mark"
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className={style.nav}>
        <Row className={style.navCont}>
          <Col span={16} className={style.navLeft}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="mark">
                <Link to="/">兔子の文档</Link>
              </Menu.Item>
              <Menu.Item key="book">
                <Link to="/book"> 兔子の书单</Link>
              </Menu.Item>
              <Menu.Item key="every">
                <Link to="/every"> 兔子の日常</Link>
              </Menu.Item>
              <Menu.Item key="write">
                <Link to="/write"> 兔子の留言板</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} className={style.navRight}>
            <a
              className={style.navRightImg}
              href="https://github.com/AloneYan"
              title="去github看看"
              target="blank"
            >
              <img src={githubImg} alt="github"></img>
            </a>
            <a
              className={style.navRightImg}
              href="https://blog.csdn.net/YanH_an"
              title="去csdn看看"
              target="blank"
            >
              <img src={csdnImg} alt="csdn"></img>
            </a>
            <a
              className={style.navRightImg}
              href="https://www.weibo.com/5194163137/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"
              title="去微博看看"
              target="blank"
            >
              <img src={sinaImg} alt="新浪微博"></img>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Nav;
