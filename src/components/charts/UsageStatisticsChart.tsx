// src/components/Charts/UsageStatisticsChart.tsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../../styles/index.scss";

interface UsageStatisticsChartProps {
  data: { by_platform?: { [platform: string]: number } } | undefined; // Make sure data can be undefined
}

const UsageStatisticsChart: React.FC<UsageStatisticsChartProps> = ({
  data,
}) => {
  if (!data || !data.by_platform) {
    // Handle the case when data or by_platform is undefined
    return (
      <div className="chart-container">
        <p>No data available</p>
      </div>
    );
  }

  const chartData = Object.entries(data.by_platform).map(
    ([platform, value]) => ({ platform, value })
  );

  return (
    <div className="chart-container">
      <h2>Usage Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={800} height={500} data={chartData}>
          <XAxis dataKey="platform" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#16a085" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsageStatisticsChart;
