import React from "react";
import { ChevronLeft, ChevronRight } from "../../../imgs/icons";
import "./PaginationBtns.css";

const PaginationBtns = ({ currentPage, toPrevPage, toNextPage }) => {
  return (
    <div className="pagination__btns_conainer">
      <button
        onClick={toPrevPage}
        className="pagination__btn pagination__btn-prev"
      >
        <ChevronLeft /> prev
      </button>

      <div className="pagination__btns--current_page">
        <p>{currentPage}</p>
      </div>

      <button
        onClick={toNextPage}
        className="pagination__btn pagination__btn-next"
      >
        next <ChevronRight />
      </button>
    </div>
  );
};

export default PaginationBtns;
