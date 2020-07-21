import { Card, Col, Row } from "antd";
import React from "react";

const tutorsData = [
  {
    email: "deanmed@hku.hk",
    floors: [5, 6],
    image:
      "http://www.rcblockb.hku.hk/wp-content/uploads/2015/09/Prof_Leung_selected_Day1_0003-e1470374068270-300x300.jpg",
    name: "Professor Gabriel Leung",
    position: "Master",
    rank: 4,
  },
  {
    email: "rainbow.wong@hku.hk",
    floors: [5, 6],
    image:
      "http://www.rcblockb.hku.hk/wp-content/uploads/2016/08/rainbow-104-y-sq-300x300.jpg",
    name: "Ms Rainbow Wong",
    position: "Senior Tutor",
    rank: 4,
  },
  {
    email: "adasante2@gmail.com",
    floors: [6, 7],
    image:
      "http://www.rcblockb.hku.hk/wp-content/uploads/2019/08/Derek_pic.png",
    name: "Mr Derek Abankwa",
    position: "Tutor",
    rank: 4,
  },
  {
    email: "siling@connect.hku.hk",
    floors: [8, 9, 10],
    image: "http://www.rcblockb.hku.hk/wp-content/uploads/2019/08/Siling.png",
    name: "Dr Siling Pang",
    position: "Tutor",
    rank: 4,
  },
];

const Tutors = () => {
  return (
    <div>
      <h2>The Tutorial team</h2>
      <p>
        For information on the tutorial team,{" "}
        <a href="http://www.chisuncollege.hku.hk/management-tutorial-team">
          click here{" "}
        </a>
      </p>
      <Row>
        {tutorsData.map((tutor) => (
          <Col span={6}>
            <Card
              style={{ margin: "auto", width: 240, marginBottom: 10 }}
              title={tutor.name}
            >
              <img
                src={tutor.image}
                width="200"
                height="200"
                alt={tutor.name}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Tutors;
