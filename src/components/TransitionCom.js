import React from 'react' ;
import konullu from "../images/Konullu.jpeg";
import konullus from '../images/Konullus.jpeg' ;
import { Row, Col } from 'react-bootstrap' ;

function TransitionCom() {
  return (
    <div className='ourProjects transitionCom'>
      <p style={{marginBottom : '2px'}}>KEÇİDLƏR</p>
      <h5>Birlikdə daha <b>ASAN</b>!</h5>
      <Row className='mt-5'>
        <Col className="twoImage" md={6}>
          <div>
            <img src={konullu} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>ASAN MƏKTUB</p>
          </div>
          <div>
            <img src={konullus} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>ƏSGƏRƏ MƏKTUB</p>
          </div>
        </Col>
        <Col md={6} className='twoImage'>
          <div>
            <img src={konullu} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>ASAN SCHOOL</p>
          </div>
          <div>
            <img src={konullus} width={"131.36px"} height={"131.36px"} alt={'Flink'} />
            <p>ASAN KADR</p>
          </div></Col>
      </Row>
    </div>
  )
}

export default TransitionCom
