import React from "react";
import { PaginationContainer, PaginationButton } from "./Pagination.style";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
}) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={onPreviousPage} disabled={currentPage === 1}>
        Previous
      </PaginationButton>
      <PaginationButton
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
