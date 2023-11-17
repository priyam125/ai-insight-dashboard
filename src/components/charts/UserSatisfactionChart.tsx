// src/components/Charts/UserSatisfactionChart.tsx
import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import "../../styles/index.scss";

interface UserSatisfactionChartProps {
  data: { ratings: { rating: number; count: number }[] };
}

const UserSatisfactionChart: React.FC<UserSatisfactionChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>User Satisfaction</h2>
      <PieChart width={500} height={300}>
        <Pie dataKey="count" nameKey="rating" data={data.ratings} fill="#8884d8" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default UserSatisfactionChart;
