import React from "react";
import styled from "styled-components";

const Overview = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const OverviewComponent = () => {
  return (
    <Overview>
      <h2>Overview</h2>
      <p>Total Income: $1000</p>
      <p>Total Expenses: $800</p>
    </Overview>
  );
};

export default OverviewComponent;
