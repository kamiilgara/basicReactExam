import React from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { faLink, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function OneNews({ news }) {

    const para = useParams();
    const selectedNews = news.find(i => i.key == para.key);
    console.log(selectedNews);
    console.log(para);


    useEffect(() => {
        if (selectedNews.key === news.length - 1) {
            document.getElementById('nav2').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav2').style.color = 'gray';
            document.getElementById('nav2').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav2').style.backgroundColor = '#104de5';
            document.getElementById('nav2').style.color = 'white';
            document.getElementById('nav2').style.pointerEvents = 'auto';
        }
    }, [selectedNews.key]);

    useEffect(() => {
        if (selectedNews.key === 0) {
            document.getElementById('nav1').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav1').style.color = 'gray';
            document.getElementById('nav1').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav1').style.backgroundColor = '#104de5';
            document.getElementById('nav1').style.color = 'white';
            document.getElementById('nav1').style.pointerEvents = 'auto';
        }
    }, [selectedNews.key]);



    return (
        <div className='allComBack'>
            <Container>
                <Row className='oneNews'>
                    <Col lg="6" className='col-12' >
                        <h1>XƏBƏRLƏR</h1>
                        <h3>{selectedNews.head}</h3>
                        <p>{selectedNews.text}</p>
                    </Col>
                    <Col lg='6' className='col-12' >
                        <img src={selectedNews.image} className='d-block ms-auto' alt="img" />
                        <div className="navbutton">
                            <Link className='disabled' to={`/news/${Number(selectedNews.key) - 1}`} id='nav1' >←</Link>
                            <Link to={`/news/${Number(selectedNews.key) + 1}`} id='nav2' >→</Link>
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

export default OneNews;
