import React from "react";
import "./Pagination.module.css";

const Pagination = (props) => {
  const { rowsPerPage, totalRows, paginate } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
