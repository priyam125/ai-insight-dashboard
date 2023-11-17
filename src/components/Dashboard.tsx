// src/components/Dashboard/Dashboard.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CategoryDistributionChart from "../components/charts/CategoryDistributionChart";
import ResponseTimesChart from "../components/charts/ResponseTimesChart";
import UserSatisfactionChart from "../components/charts/UserSatisfactionChart";
import UsageStatisticsChart from "../components/charts/UsageStatisticsChart";
import "../styles/index.scss";

const Dashboard: React.FC = () => {
  const aiData = useSelector((state: RootState) => state.ai);

  return (
    <div className="dashboard-container">
      <h1>AI Insights Dashboard</h1>
      <CategoryDistributionChart data={aiData.category_distribution} />
      <ResponseTimesChart data={aiData.response_times} />
      <UserSatisfactionChart data={aiData.user_satisfaction} />
      <UsageStatisticsChart data={aiData.usage_statistics} />
    </div>
  );
};

export default Dashboard;
