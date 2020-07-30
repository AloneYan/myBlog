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
            <Col span={8}>
              <Row>
                <Col flex="100px">性别：</Col>
                <Col flex="auto">女</Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col flex="100px">生日：</Col>
                <Col flex="auto">1996-09-12</Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col flex="100px">现住址：</Col>
                <Col flex="auto">北京市丰台区</Col>
              </Row>
            </Col>
          </Row>
          <Row className={style.my}>
            <Col span={8}>
              <Row>
                <Col flex="100px">婚否：</Col>
                <Col flex="auto">未婚</Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col flex="100px">手机：</Col>
                <Col flex="auto">17600065095</Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col flex="100px">家住址：</Col>
                <Col flex="auto">吉林省通化市</Col>
              </Row>
            </Col>
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
