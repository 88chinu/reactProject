import React from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";

const Container = styled.div`
  padding: 20px;
`;

const Tracker = () => {
  return (
    <Container>
      <OverviewComponent />
      <TransactionsContainer />
    </Container>
  );
};

export default Tracker;
