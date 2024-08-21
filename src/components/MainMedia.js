import React from "react";
import socialMedias from '../images/socialMedias2.png'
import { Col, Row, Container } from "react-bootstrap";

function MainMedia() {
  return (
    <Row className="mediaCom">
      <Col md={4} className='col-6 mediaCom1' >
        <div className="ourProjects">
          <p>MEDIA</p>
          <h5>ASAN Könüllüləri Mediada!</h5>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod</h4><h4>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,</h4><h4>
            quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in</h4>
        </div>
        <div className="mediaBtn">
          <a href="/media" className='defaultLink'>Ətraflı oxu</a>
        </div>
      </Col>
      <Col md={8} className='col-6' >
        <img className="d-block ms-auto mt-5 mediaIcons" src={socialMedias} alt="immgg" />
      </Col>
    </Row>
  );
}

export default MainMedia;
