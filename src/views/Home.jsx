import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import dataEs from "../data/es.json";
import dataEn from "../data/en.json";

class Home extends Component {
  constructor(props) {
    super(props);
    const lang = (props.lang || "es").toLowerCase();

    this.state = {
      data: lang === "es" ? dataEs : dataEn,
      lang: lang
    };
  }
  render() {
    //build p
    const pInfo = [];
    const title = this.state.data.aboutMe.title;
    let age = this.state.data.personalData.age;
    let adddress = this.state.data.personalData.address;

    if (this.state.lang === "es") {
      age = <span key='age'><b>Edad:</b> {age}</span>;
      adddress = <span key='address'><b>Dirección: </b> {adddress}</span>;
    } else {
        age = <span><b>Edad:</b> {age}</span>;
        adddress = <span><b>Dirección: </b> {adddress}</span>;
    }

    for (const [index,value] of this.state.data.aboutMe.description.entries()) {
      pInfo.push(<p key={index}>{value}</p>);
    }
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} sm={12} md={4} lg={3} xl={2}>
            <Image src={require("../assets/img/profile.jpg")} roundedCircle fluid />
            <ul style={{listStyleType: "none"}}>
              <li>{age}</li>
              <li>{adddress}</li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={8} lg={9} xl={8}>
            <h3>{title}</h3>
            {pInfo}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;
