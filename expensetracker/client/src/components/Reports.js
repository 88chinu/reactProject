import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ReportSection = styled.div`
  margin-bottom: 20px;
`;

const Reports = () => {
  return (
    <Container>
      <Title>Detailed Reports</Title>
      <ReportSection>
        <h3>Income vs Expenses</h3>
        <p>[Graph or Chart Placeholder]</p>
      </ReportSection>
      <ReportSection>
        <h3>Category Breakdown</h3>
        <p>[Graph or Chart Placeholder]</p>
      </ReportSection>
      <ReportSection>
        <h3>Trends Over Time</h3>
        <p>[Graph or Chart Placeholder]</p>
      </ReportSection>
    </Container>
  );
};

export default Reports;
