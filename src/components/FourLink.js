import React from "react";
import konullu from "../images/Konullu.jpeg";
import konullus from '../images/Konullus.jpeg' ;
import { Row, Col } from "reactstrap";

function FourLink() {
  return (
    <div className="aboutAct">
      <Row>
        <Col className="twoImage" md={'6'}>
          <a href="/ourteam">
            <img src={konullu} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>KOMANDAMIZ</p>
          </a>
          <a href="/">
            <img src={konullus} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>TƏRƏFDAŞLAR</p>
          </a>
        </Col>
        <Col md={'6'} className='twoImage'>
          <a href="/">
            <img src={konullu} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>STRUKTUR</p>
          </a>
          <a href="/">
            <img src={konullus} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>MÜKAFATLARIMIZ</p>
          </a></Col>
      </Row>
    </div>
  );
}

export default FourLink;
