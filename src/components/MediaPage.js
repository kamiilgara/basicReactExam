import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

function MediaPage({ media }) {

  
  useEffect(() => {
    window.scroll (0,0)
  },);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = media.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(media.length / recordsPerPage)

  return (
    <div className='allComMedia'>
      <Container>
        <h1 className="main-h1">MEDIA</h1>
        <Row className='mb-5'>
          {currentRecords.map(currentRecord =>
            <Col lg='4' key={currentRecord.id}>
              <div className='media mx-auto'>
                <h3>{currentRecord.date}</h3>
                <h2>{currentRecord.head}</h2>
                <img src={currentRecord.image} className='d-block' alt='media' />
                <p>{currentRecord.text}</p>
                <Link to={`${currentRecord.id}`} className='moreInfo'>Ətraflı oxu</Link>
              </div>
            </Col>
          )}
        </Row>
        
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </Container>
    </div>
  )
}

export default MediaPage;
