import React from 'react';
import Overview from '../components/Dashboard/Overview';
import Transactions from '../components/Dashboard/Transactions';
import Reports from '../components/Dashboard/Reports';
import ExportImport from '../components/Dashboard/ExportImport';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Overview />
      <Transactions />
      <Reports />
      <ExportImport />
    </div>
  );
};

export default DashboardPage;
