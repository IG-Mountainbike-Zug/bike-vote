"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { type RadarplotProps } from "~/components/radar/types";
import ReactDOM from "react-dom";

export const RadarPlot = ({ name, data }: RadarplotProps) => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines />
          <PolarAngleAxis dataKey="question" />
          <PolarRadiusAxis />
          <Radar
            name={name}
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};
