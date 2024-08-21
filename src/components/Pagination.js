import React from 'react';

function Pagination(props) {


    const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (props.currentPage !== props.n)
            props.setCurrentPage(props.currentPage + 1)
    }
    const prevPage = () => {
        if (props.currentPage !== 1) {
            props.setCurrentPage(props.currentPage - 1)
        }
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className='page-item'>
                    <div className='page-link' onClick={prevPage} id='prev' >Prev</div>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber} className={`page-item ${props.currentPage === pgNumber ? 'active' : ''}`}>

                        <div onClick={() => props.setCurrentPage(pgNumber)}
                            className={'page-link'}
                            href={'/'}
                        >{pgNumber}</div>
                    </li>
                ))}

                <li className='page-item'>
                    <div className='page-link' onClick={nextPage} >Next</div>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
