// src/components/Charts/ResponseTimesChart.tsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "../../styles/index.scss";

interface ResponseTimesChartProps {
  data: { day_wise: { date: string; average_time: number }[] };
}

const ResponseTimesChart: React.FC<ResponseTimesChartProps> = ({ data }) => {
  return (
    <div className="chart-container">
      <h2>Response Times</h2>
      <LineChart width={500} height={300} data={data.day_wise}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ResponseTimesChart;
