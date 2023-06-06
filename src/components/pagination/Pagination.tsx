import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.scss";

interface PaginationProps {
  onChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected: { selected: number }) => {
    const newPage = selected.selected;
    setCurrentPage(newPage);
    onChange(newPage + 1);
  };

  return (
    <ReactPaginate
      className="root"
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
