// src/components/Charts/UserSatisfactionChart.tsx
import React from "react";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "../../styles/index.scss";

interface UserSatisfactionChartProps {
  data: { ratings?: { rating: number; count: number }[] } | undefined; // Make sure data can be undefined
}

const UserSatisfactionChart: React.FC<UserSatisfactionChartProps> = ({
  data,
}) => {
  if (!data || !data.ratings) {
    // Handle the case when data or ratings is undefined
    return (
      <div className="chart-container">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h2>User Satisfaction</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={800} height={500}>
          <Pie
            dataKey="count"
            nameKey="rating"
            data={data.ratings}
            fill="#16a085"
            label
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSatisfactionChart;
