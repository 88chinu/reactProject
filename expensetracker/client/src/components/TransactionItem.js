import React from "react";
import styled from "styled-components";

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TransactionItem = ({ transaction }) => {
  return (
    <Transaction>
      <span>{transaction.description}</span>
      <span>{transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
    </Transaction>
  );
};

export default TransactionItem;
