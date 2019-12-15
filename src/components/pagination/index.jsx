import React from "react";

const Pagination = ({ page, onPageChange }) => {
  const intPage = parseInt(page, 10);

  function nextPage() {
    onPageChange(intPage + 1);
  }
  function previousPage() {
    if (intPage === 1) return;
    onPageChange(intPage - 1);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={previousPage}
            data-testid="previous-page"
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            className="page-link"
            onClick={nextPage}
            data-testid="next-page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
