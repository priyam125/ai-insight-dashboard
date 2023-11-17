// src/components/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CategoryDistributionChart from "../components/charts/CategoryDistributionChart";
import ResponseTimesChart from "../components/charts/ResponseTimesChart";
import UserSatisfactionChart from "../components/charts/UserSatisfactionChart";
import UsageStatisticsChart from "../components/charts/UsageStatisticsChart";
import "../styles/index.scss";

const Dashboard: React.FC = () => {
  const aiData = useSelector((state: RootState) => state.ai);
  const [selectedChart, setSelectedChart] = useState<string>(
    "categoryDistribution"
  );

  const handleChartSelection = (chartName: string) => {
    setSelectedChart(chartName);
  };

  return (
    <div className="dashboard">
      <h1>AI Insights Dashboard</h1>
      <div className="button-container">
        <button
          onClick={() => handleChartSelection("categoryDistribution")}
          className={selectedChart === "categoryDistribution" ? "selected" : ""}
        >
          Category Distribution
        </button>
        <button
          onClick={() => handleChartSelection("responseTimes")}
          className={selectedChart === "responseTimes" ? "selected" : ""}
        >
          Response Times
        </button>
        <button
          onClick={() => handleChartSelection("userSatisfaction")}
          className={selectedChart === "userSatisfaction" ? "selected" : ""}
        >
          User Satisfaction
        </button>
        <button
          onClick={() => handleChartSelection("usageStatistics")}
          className={selectedChart === "usageStatistics" ? "selected" : ""}
        >
          Usage Statistics
        </button>
      </div>
      {selectedChart === "categoryDistribution" && (
        <CategoryDistributionChart data={aiData.category_distribution} />
      )}
      {selectedChart === "responseTimes" && (
        <ResponseTimesChart data={aiData.response_times} />
      )}
      {selectedChart === "userSatisfaction" && (
        <UserSatisfactionChart data={aiData.user_satisfaction} />
      )}
      {selectedChart === "usageStatistics" && (
        <UsageStatisticsChart data={aiData.usage_statistics} />
      )}
    </div>
  );
};

export default Dashboard;
