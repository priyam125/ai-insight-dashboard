// src/components/Charts/CategoryDistributionChart.tsx

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "../../styles/index.scss";

interface CategoryDistributionChartProps {
  data: { [category: string]: number } | undefined;
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({ data }) => {
  if (!data) {
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
        {/* Adjust the height to your preferred value, for example, 400 */}
        <BarChart data={chartData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;

