import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const Container = styled.div``;

const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid #e6e8e9;
  background-color: #e6e8e9;
  margin-bottom: 25px;
`;

const TransactionItems = styled.div``;

const TransactionsContainer = ({ transactions, removeTransaction }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  // UseCallback ensures that filteredData doesn't change unless searchInput or transactions change.
  const filteredData = useCallback(
    (searchInput) => {
      if (!searchInput || !searchInput.trim().length) {
        setFilteredTransactions(transactions);
        return;
      }

      const filtered = transactions.filter((item) =>
        item.details.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      setFilteredTransactions(filtered);
    },
    [transactions]
  );

  useEffect(() => {
    filteredData(searchInput);
  }, [filteredData, searchInput]); // Include filteredData in the dependency array

  return (
    <Container>
      <Heading>Transactions</Heading>

      <SearchInput
        type="text"
        placeholder="Search here"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <TransactionItems>
        {filteredTransactions?.length ? (
          filteredTransactions.map((transaction) => (
            <TransactionItem
              transaction={transaction}
              key={transaction.id}
              removeTransaction={removeTransaction}
            />
          ))
        ) : (
          <p>No Transactions</p>
        )}
      </TransactionItems>
    </Container>
  );
};

export default TransactionsContainer;
