import React from 'react' ;
import { Row, Col } from 'react-bootstrap' ;

function OurProjects({ourProjects}) {
  return (
    <div className='ourProjects transitionCom'>
    <p>LAHİYƏLƏRİMİZ</p>
    <h5>Gördüyümüz işlərlə tanış olun</h5>
      <Row className='d-flex justify-content-center'>
        {ourProjects.map((ourProject) =>
        <Col md={'4'} className='col-4' key={ourProject.id} >
        <div className='ourProjectsDiv'>
        <a href='/'>
            <img src={ourProject.image} className='d-block' alt='/' />
            <h5>{ourProject.head}</h5>
        </a>
        </div>
        </Col>)}
      </Row>
    </div>
  )
}

export default OurProjects;
