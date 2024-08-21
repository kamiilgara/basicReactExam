/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import logo from "../images/Asan-2.png";
import { useState } from "react";
import SocialMediaObjects from "./SocialMediaObjects";
import { Row, Col, Container, Modal, ModalBody } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsColor = {
  'color': '#646464',
}

const iconsStyleFooter = {
  'color': '#646464',
}


function Footer() {




  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="footerStyle">
      <div style={{ borderBottom: 'solid 1px #7Ab8FF' }}>
        <Container>
          <Row style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '90px' }}>
            <Col lg={4} className='firstColFooter'>
              <div className="d-flex">
                <img style={{objectFit: 'contain'}} src={logo} width="101px" alt="logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore nmagna aliqua.</p>
              </div>
              <div className="d-flex justify-content-start icons">
                <SocialMediaObjects iconsColor={iconsColor} />
                <button className="navbutton1" onClick={handleShow} style={{ background: 'none', border: 'none', color: '#646464', fontSize: '20px', lineHeight: '12px', marginLeft: '25px' }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                <Modal id={'modal'} centered size="lg" show={show} onHide={handleClose}>
                  <ModalBody className="d-flex">
                    <button className={window.location.pathname !== '/home' ? 'button2' : 'button1'}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <input placeholder="Axtarış..." type={'text'} />
                  </ModalBody>

                </Modal>
              </div>
            </Col>
            <Col md={2} className='otherColFooter col-6' >
              <h1>Saytın Xəritəsi</h1>
              <ul>
                <li><a href="/home">Ana Səhifə</a></li>
                <li><a href="/aboutus">Haqımızda</a></li>
                <li><a href="/projects">Layihələr</a></li>
                <li><a href="/news">Xəbərlər</a></li>
                <li><a href="/media">Media</a></li>
              </ul>
            </Col>
            <Col md={2} className='otherColFooter' id="aboutfooter">
              <h1>Haqqımızda</h1>
              <ul>
                <li><a href="/ourteam">Komandamız</a></li>
                <li><a href="/">Tərəfdaşlar</a></li>
                <li><a href="/">Mükafatlar</a></li>
              </ul>
            </Col>
            <Col md={2} className='otherColFooter col-6'>
              <h1>Bizimlə Əlaqə</h1>
              <p>Bakı, Azərbaycan, AZ 1078, Akademik Həsən Əliyev 36</p>
              <p>T: (+994 12) 444 74 75
                info@asanyouth.az</p>
            </Col>
          </Row>
        </Container>
      </div>
      <p>© 2021, <a href="/" style={{ textDecoration: 'none' }}>optima.az</a>. Bütün hüquqları qorunur.</p>
    </div>
  );
}

export default Footer;
