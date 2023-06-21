import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 5px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
