import React from 'react';

const Pagination = props => {
  const { currentPage } = props;

  let btnClasses = 'btn btn-outline-light';

  return (
    <div className="d-flex justify-content-between">
      <button className={`${btnClasses} ${currentPage <= 1 ? 'disabled' : ''}`} onClick={() => props.prevPage()}>
        Previous Page
      </button>
      <h5 className="mx-5 mt-2">{`Page ${currentPage} / 11`}</h5>
      <button className={`${btnClasses} ${currentPage >= 11 ? 'disabled' : ''}`} onClick={() => props.nextPage()}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
