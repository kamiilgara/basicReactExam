import React from "react";
import { useState, useEffect } from "react";
import { Nav, Navbar, NavDropdown, Modal, Button, ModalBody } from "react-bootstrap";
import logo from "../images/Asan-1.png";
import { MenuOutlined } from "@ant-design/icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SocialMediaObjects from "./SocialMediaObjects";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from "@fortawesome/fontawesome-svg-core";

function NavbarCom({ classs }) {

  const navbarStylecolor = {
    color: 'white'
  }

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {

    const updateScrollValue = () => {
      setScrollValue(window.pageYOffset);
    }

    window.addEventListener('scroll', updateScrollValue);

    if (scrollValue > 550 && window.location.pathname === '/home') {
      document.getElementById('headerBack').style.backgroundColor = 'black';
    } else if (window.location.pathname !== '/home') {
      document.getElementById('headerBack').style.backgroundColor = '#104de5';
    } else {
      document.getElementById('headerBack').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

    }

    return () => {
      window.removeEventListener('scroll', updateScrollValue);

    };
  }, [scrollValue]);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className={classs} id="headerBack" >
      <Navbar bg="transparent" className="container" expand="lg">
        <Navbar.Brand href="/home" className="App-logo">
          <img src={logo} width={"84px"} alt={"Asan logo"} classs='logo-view' />
        </Navbar.Brand>
        <div className="d-flex">
          <button className="navbutton2" onClick={handleShow} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', lineHeight: '12px', marginLeft: '25px' }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>


          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            data-bs-target="#responsive-navbar-nav"
          >
            {/* <button style={{ border: "none", background: "none" }}> */}
              <MenuOutlined style={{ color: "white" }} />
            {/* </button> */}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto facc">
            <Nav.Link href="/home">ANA SƏHİFƏ</Nav.Link>

            <NavDropdown
              title="HAQQIMIZDA"
              renderMenuOnMount={true}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className={classs} href={'/ourteam'}>
                KOMANDAMIZ
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.2">
                TƏRƏFDAŞLAR
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.3">
                STRUKTUR
              </NavDropdown.Item>
              <NavDropdown.Item className={classs} href="#action/3.3">
                MÜKAFATLAR
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={"/projects"}>LAYİHƏLƏR</Nav.Link>
            <Nav.Link href={"/news"}>XƏBƏRLƏR</Nav.Link>
            <Nav.Link href={"/media"}>MEDİA</Nav.Link>
            <Nav.Link href={"/info"}>ƏLAQƏ</Nav.Link>
          </Nav>
          <div className="navbarSocial">
            <SocialMediaObjects iconsColor={navbarStylecolor} />
          </div>
          <button className="navbutton1" onClick={handleShow} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', lineHeight: '12px', marginLeft: '25px' }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

          <Modal id={'modal'} centered size="lg" show={show} onHide={handleClose}>
            <ModalBody className="d-flex">
              <button className={window.location.pathname !== '/home' ? 'button2' : 'button1'}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
              <input placeholder="Axtarış..." type={text} />
            </ModalBody>

          </Modal>

        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}
export default NavbarCom;
