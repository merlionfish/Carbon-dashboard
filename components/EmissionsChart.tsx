"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { EmissionData } from "@/lib/api";

export default function EmissionsChart({ data }: { data: EmissionData[] }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="mb-2 font-semibold">Monthly Emissions</h3>
      <LineChart width={400} height={200} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="emissions" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
