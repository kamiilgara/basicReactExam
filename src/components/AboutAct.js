import React from 'react' ;
import konulluImage from '../images/Konullu.jpeg' ;
import { Row, Col } from 'reactstrap' ;

function AboutAct() {
  return (
    <div className='aboutAct'>
      <Row>
        <Col md={6} className='aboutCol col-6'><img src={konulluImage} width='587px' style={{borderRadius : '0px 0px 116px 0px'}}  /></Col>
        <Col md={6} className='aboutCol col-6'>
            <h5>AKT HAQQINDA</h5>
            <h1>Könüllü sıralarımıza <b>SƏN</b> də qatıl!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderitveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
            <button type={'button'} className='defaultButton'>Ətraflı oxu</button>
        </Col>
      </Row>
    </div>
  )
}

export default AboutAct
