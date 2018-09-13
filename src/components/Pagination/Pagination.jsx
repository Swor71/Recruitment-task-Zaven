import React from 'react';

const Pagination = props => {
  const { currentPage } = props;

  let btnClasses = 'btn btn-info';

  return (
    <footer className="d-flex justify-content-around mb-3">
      <button className={`${btnClasses} ${currentPage <= 1 ? 'disabled' : ''}`} onClick={() => props.prevPage()}>
        Previous Page
      </button>
      <span>{`Page ${currentPage} / 11`}</span>
      <button className={`${btnClasses} ${currentPage >= 11 ? 'disabled' : ''}`} onClick={() => props.nextPage()}>
        Next Page
      </button>
    </footer>
  );
};

export default Pagination;
