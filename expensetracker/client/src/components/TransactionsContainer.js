import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const TransactionsContainer = () => {
  const transactions = [
    { id: 1, description: "Grocery", amount: -50 },
    { id: 2, description: "Salary", amount: 500 },
  ];

  return (
    <Container>
      <h3>Transaction History</h3>
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </Container>
  );
};

export default TransactionsContainer;
