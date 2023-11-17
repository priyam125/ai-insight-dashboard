// src/components/Charts/CategoryDistributionChart.tsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "../../styles/index.scss";

interface CategoryDistributionChartProps {
  data: { [category: string]: number };
}

const CategoryDistributionChart: React.FC<CategoryDistributionChartProps> = ({ data }) => {
  const chartData = Object.entries(data).map(([category, value]) => ({ category, value }));

  return (
    <div className="chart-container">
      <h2>Category Distribution</h2>
      <BarChart width={500} height={300} data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CategoryDistributionChart;
