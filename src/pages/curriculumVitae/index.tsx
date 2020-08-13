import React from "react";
import { Progress, Row, Col, Divider } from "antd";

import { progressColor } from "./model";
import IconFont from "@components/myIconfont";
import style from "./style.module.less";

export default () => {
  return (
    <div className={style.cv}>
      <div className={style.box}>
        <div>
          <Divider className={style.title} orientation="left">
            <IconFont type="icon-tuzi_huaban" /> 自我介绍
          </Divider>
          <Row className={style.my}>
            <Col span={1}>
              <IconFont type="icon-danxuanxuanzhong" />
            </Col>
            <Col span={23}>
              来自<span className={style.color}>吉林</span>
              的兔子，目前在京城求生，性别女，96年生，未婚有一个大5岁的男友。
              <br />
              18年辣鸡大学工商管理专业毕业参加前端培训学习，从事前端工作，自封
              <span className={style.color}>前端开发工程师</span>
              ，实际技术辣鸡，审美度为0。
            </Col>
          </Row>
          <Row className={style.my}>
            <Col span={1}>
              <IconFont type="icon-danxuanxuanzhong" />
            </Col>
            <Col span={23}>
              轻度<span className={style.color}>社恐</span>患者，日常
              <span className={style.color}>鸽子王</span>
              ，中度<span className={style.color}>选择困难症</span>
              ，随便怪，拥有一颗想跟新朋友疯玩又怕尴尬的心。
              <br />
              最爱吃<span className={style.color}>火锅</span>
              并且蘸料只要芝麻酱，厌恶各种做法的香菜、炒熟的葱花圆葱到了一闻就吐的程度，现在喜欢吃辣但是不能吃辣。
            </Col>
          </Row>
          <Row className={style.my}>
            <Col span={1}>
              <IconFont type="icon-danxuanxuanzhong" />
            </Col>
            <Col span={23}>
              喜欢游戏。手机游戏<span className={style.color}>王者荣耀</span>
              可以自己混到王者。吃鸡算了，我就是个瞎子。
              <br />
              电脑上最会的是<span className={style.color}>qq飞车</span>
              ，从初中就开始玩，成为社畜之后很少玩。
              <br />
              最喜欢的是<span className={style.color}>英雄联盟</span>
              ，最菜的也是英雄联盟，只敢放假的时候跟朋友一起开黑，自己从来不玩。其他的有饥荒、缺氧、剑灵、cf等等。
              <br />
              拥有一台ps，购买的盘有
              <span className={style.color}>
                大表哥、热血少女、分手厨房、小小大星球、街霸
              </span>
              。都没通关哈哈哈哈哈哈哈。
            </Col>
          </Row>
          <Row className={style.my}>
            <Col span={1}>
              <IconFont type="icon-danxuanxuanzhong" />
            </Col>
            <Col span={23}>
              喜欢看<span className={style.color}>动漫</span>
              但是不了解日本文化，讨厌后宫漫。喜欢大女主类小说，讨厌傻白甜，世界上大多数书都能看进去。
              <br />
              接受快进看韩剧和国产剧，不会快进看美剧，不喜欢日剧。
              <br />
              毕业之后经常去电影院，可以自己看电影，也可以自己吃饭。喜欢美产电影更多，国产喜剧，不喜欢看韩国电影，会看动漫剧场版。
              <br />
              不追星，什么歌都听，最近听的多的是周杰伦，新歌必听的只有
              <span className={style.color}>许嵩</span>，从不会为明星花钱。
            </Col>
          </Row>
        </div>
        <div className={style.progress}>
          <Divider className={style.title} orientation="left">
            <IconFont type="icon-tuzi_huaban" /> 关于本站
          </Divider>
          <Row className={style.my}>
            本站服务器在国外，用的是bwg，所以加载很慢，但是便宜，并且可以科学上网。域名在腾讯云，为期3年涨价就换。
            <br />
            用React-Antd-Typescript-Java-MySql-Redis搭建，运行在nginx上。
            <br />
            搭建与2020年3月，因为这个时候我失业了，每次失业想学东西充实自己的时候都会搭建博客，只有这次坚持下来了，但也拖了很长时间。
            <br />
            前后台的源码都在这里 https://github.com/rabbit-y
            <br />
            特此感谢亲爱的男友帮忙写后台代码，丁老板我永远的神
          </Row>
        </div>
        <div className={style.progress}>
          <Divider className={style.title} orientation="left">
            <IconFont type="icon-tuzi_huaban" /> 奇怪的技能
          </Divider>

          {progressColor.map((item, key) => (
            <Row className={style.progressList} key={key}>
              <Col span={4} className={style.name}>
                {item.type}
              </Col>
              <Col span={10} className={style.list}>
                <Progress
                  strokeColor={{
                    "0%": item.colorStar,
                    "100%": item.colorEnd,
                  }}
                  percent={item.percent}
                />
              </Col>
              <Col span={10} className={style.des}>
                {item.des}
              </Col>
            </Row>
          ))}
        </div>
      </div>
    </div>
  );
};
