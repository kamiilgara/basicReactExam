import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { faLink, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OneMedia({ media }) {

    const param = useParams();
    const selectedMedia = media.find(i => i.id == param.id);
    console.log(selectedMedia);
    console.log(param);

    useEffect(() => {
        if (selectedMedia.id === media.length - 1) {
            document.getElementById('nav4').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav4').style.color = 'gray';
            document.getElementById('nav4').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav4').style.backgroundColor = '#104de5';
            document.getElementById('nav4').style.color = 'white';
            document.getElementById('nav4').style.pointerEvents = 'auto';
        }
    }, [selectedMedia.id]);

    useEffect(() => {
        if (selectedMedia.id === 0) {
            document.getElementById('nav3').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav3').style.color = 'gray';
            document.getElementById('nav3').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav3').style.backgroundColor = '#104de5';
            document.getElementById('nav3').style.color = 'white';
            document.getElementById('nav3').style.pointerEvents = 'auto';
        }
    }, [selectedMedia.id]);

    return (
        <div className='allComBack'>
            <Container>
                <Row>
                    <Col lg="6">
                        <h1>MEDIA</h1>
                        <h3>{selectedMedia.head}</h3>
                        <p>{selectedMedia.text}</p>
                    </Col>
                    <Col lg='6'>
                        <img src={selectedMedia.image} className='d-block ms-auto' alt="img" />
                        <div className="navbutton">
                            <Link className='disabled' to={`/media/${Number(selectedMedia.id) - 1}`} id='nav3' >←</Link>
                            <Link to={`/media/${Number(selectedMedia.id) + 1}`} id='nav4' >→</Link>
                        </div>
                        <div className="pageIcons">
                            <a href='#'><FontAwesomeIcon id='link' icon={faLink}></FontAwesomeIcon></a>
                            <a href='#'><FontAwesomeIcon id='facebook' icon={faFacebookSquare}></FontAwesomeIcon></a>
                            <a href='#'><FontAwesomeIcon id='linkedin' icon={faLinkedin}></FontAwesomeIcon></a>
                            <a href='#'><FontAwesomeIcon id='twitter' icon={faTwitter}></FontAwesomeIcon></a>
                            <a href='#'><FontAwesomeIcon id='print' icon={faPrint}></FontAwesomeIcon></a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default OneMedia
