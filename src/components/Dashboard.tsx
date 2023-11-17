// src/components/Dashboard/Dashboard.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Dashboard: React.FC = () => {
  const aiData = useSelector((state: RootState) => state.ai);

  return (
    <div className="dashboard-container">
      <h1>AI Insights Dashboard</h1>
    </div>
  );
};

export default Dashboard;
