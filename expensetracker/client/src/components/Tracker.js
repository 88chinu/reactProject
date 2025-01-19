import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";

// Styled Components for Tracker
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  padding: 30px 20px;
  background-color: ${(props) => (props.darkMode ? "#2c2c2c" : "#fff")};
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
  border-radius: 5px;
  box-shadow: ${(props) => (props.darkMode ? "0px 0px 15px rgba(255, 255, 255, 0.1)" : "0px 0px 15px rgba(0, 0, 0, 0.1)")};
`;

const Heading = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${(props) => (props.darkMode ? "#fff" : "#000")};
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${(props) => (props.darkMode ? "#444" : "#fff")};
  & span {
    font-weight: bold;
    font-size: 25px;
    display: block;
    color: ${(props) => (props.isExpense ? "red" : "green")};
  }
`;

const IncomeBox = styled(ExpenseBox)``;

const Tracker = ({ darkMode }) => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const AddTransactions = (payload) => {
    setTransactions((prevTransactions) => [...prevTransactions, payload]);
  };

  const removeTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const calculateTransactions = useCallback(() => {
    let exp = 0;
    let inc = 0;

    transactions.forEach((item) => {
      if (item.transType === "expense") {
        exp += item.amount;
      } else {
        inc += item.amount;
      }
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  useEffect(() => {
    calculateTransactions();
  }, [transactions, calculateTransactions]);

  return (
    <Container darkMode={darkMode}>
      <Heading darkMode={darkMode}>Expense Tracker</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <ExpenseBox darkMode={darkMode} isExpense>
          Expense <span>₹{expense}</span>
        </ExpenseBox>

        <IncomeBox darkMode={darkMode}>
          Budget <span>₹{income}</span>
        </IncomeBox>
      </TransactionDetails>

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;
