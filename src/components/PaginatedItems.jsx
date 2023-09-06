import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import NextButton from "./Buttons/NextButton";
import PreviousButton from "./Buttons/PreviousButton";
import { useGlobalContext } from "../context/context";

export default function PaginatedItems({ itemsPerPage }) {
    const { totalPage, page, setPage } = useGlobalContext();

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    return (
        <>
            <div className="pagination-container">
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={<PreviousButton />}
                    nextLabel={<NextButton />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    renderOnZeroPageCount={null}
                    className="pagination"
                />
            </div>
        </>
    );
}
