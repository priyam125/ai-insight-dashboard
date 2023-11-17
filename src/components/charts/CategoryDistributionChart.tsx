// src/components/Charts/CategoryDistributionChart.tsx

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../../styles/index.scss";

interface CategoryDistributionChartProps {
  data: { [category: string]: number } | undefined; // Make sure data can be undefined
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({
  data,
}) => {
  if (!data) {
    // Handle the case when data or by_platform is undefined
    return (
      <div className="chart-container">
        <p>No data available</p>
      </div>
    );
  }

  const chartData = Object.entries(data).map(([category, value]) => ({
    category,
    value,
  }));

  return (
    <div className="chart-container">
      <h2>Category Distribution</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#16a085" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;
