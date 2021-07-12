import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="Chart">
      <h3 className="ChartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#d6d6d6" strokeDasharray="5 5" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
