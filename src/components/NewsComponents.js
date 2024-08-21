import React from 'react';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';


// let active;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

function NewsComponents({ news }) {

  useEffect(() => {
    window.scroll (0,0)
  },);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = news.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(news.length / recordsPerPage)

  return (
    <div className='allComBack'>
      <Container>
        <h1 className="main-h1">XƏBƏRLƏR</h1>
        <ul className='ulList mb-5'>
          {currentRecords.map(currentRecord =>
            <li className='newsList' key={currentRecord.key}>
              <h3 className='newsDate'>{currentRecord.date}</h3>
              <h4 className='newsHead'>{currentRecord.head}</h4>
              <p className='newsText'>{currentRecord.text}</p>
              <Link to={`${currentRecord.key}`} className='moreInfo'>Ətraflı oxu</Link>
            </li>
          )}
        </ul>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </Container>
    </div>
  )

}

export default NewsComponents
