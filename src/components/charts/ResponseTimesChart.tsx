// src/components/Charts/ResponseTimesChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../../styles/index.scss";

interface ResponseTimesChartProps {
  data: { day_wise?: { date: string; average_time: number }[] } | undefined;
}

const ResponseTimesChart: React.FC<ResponseTimesChartProps> = ({ data }) => {
  if (!data || !data.day_wise) {
    return (
      <div className="chart-container">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="chart-container">
      <h2>Response Times</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={800} height={500} data={data.day_wise}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="average_time" stroke="#16a085" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResponseTimesChart;
