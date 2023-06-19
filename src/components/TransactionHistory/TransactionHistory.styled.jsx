import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  margin: 60px auto;
  width: 600px;
  border: 1px solid rgb(214, 252, 255);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  & tr {
    height: 40px;
    font-size: 14px;
    &:nth-of-type(odd):not(thead tr) {
      background-color: rgb(255, 252, 252);
    }
    &:nth-of-type(even) {
      background-color: rgba(38, 39, 53, 0.339);
    }
  }
  & thead {
    background-color: rgb(38, 39, 53);
    color: rgb(222, 219, 219);
    height: 50px;
  }
`;
