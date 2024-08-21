import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


function OneProject({ projects }) {


    
    const par = useParams();
    const selectedProject = projects.find(i => i.key == par.key);
    console.log(selectedProject);
    console.log(par);


    useEffect(() => {
        if (selectedProject.key === projects.length - 1) {
            document.getElementById('nav2').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav2').style.color = 'gray';
            document.getElementById('nav2').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav2').style.backgroundColor = '#104de5';
            document.getElementById('nav2').style.color = 'white';
            document.getElementById('nav2').style.pointerEvents = 'auto';
        }
    }, [selectedProject.key]);

    useEffect(() => {
        if (selectedProject.key === 0) {
            document.getElementById('nav1').style.backgroundColor = '#e0e0e0';
            document.getElementById('nav1').style.color = 'gray';
            document.getElementById('nav1').style.pointerEvents = 'none';
        } else {
            document.getElementById('nav1').style.backgroundColor = '#104de5';
            document.getElementById('nav1').style.color = 'white';
            document.getElementById('nav1').style.pointerEvents = 'auto';
        }
    }, [selectedProject.key]);

  return (
    <div className='allComBack'>
        <Container>
            <Row>
                <Col lg="6">
                    <h1>XƏBƏRLƏR</h1>
                    <h3>{selectedProject.head}</h3>
                    <p>{selectedProject.text}</p>
                </Col>
                <Col lg='6'>
                    <img src={selectedProject.image} className='d-block ms-auto' alt="img" />
                    <div className="navbutton">
                        <Link className='disabled' to={`/projects/${Number(selectedProject.key) - 1}`} id='nav1' >←</Link>
                        <Link to={`/projects/${Number(selectedProject.key) + 1}`} id='nav2' >→</Link>
                    </div>
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default OneProject;
