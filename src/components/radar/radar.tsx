"use client";

import Chart from "chart.js/auto";
import { type RadarplotProps } from "~/components/radar/types";
import { type MutableRefObject, useEffect, useRef } from "react";
import { type ChartConfiguration } from "chart.js";

export const RadarPlot = ({ data }: RadarplotProps) => {
  const radarRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null);
  const chartRef: MutableRefObject<Chart | null> = useRef(null);

  useEffect(() => {
    if (radarRef.current === null) return;
    if (chartRef.current !== null) return;

    const mapValueToLabel = (value: number): string => {
      switch (value) {
        case 1:
          return "stimme überhaupt nicht zu";
        case 2:
          return "stimme nicht zu";
        case 3:
          return "stimme zu";
        case 4:
          return "stimme voll und ganz zu";
        default:
          return "stimme überhaupt nicht zu";
      }
    };

    chartRef.current = new Chart(radarRef.current, {
      type: "radar",
      data: data,
      options: {
        layout: {
          padding: 60,
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => mapValueToLabel(context.parsed.r),
            },
          },
        },
        scales: {
          r: {
            min: 0,
            max: 4,
            pointLabels: {
              font: {
                size: 14,
              },
            },
            ticks: {
              stepSize: 1,
              callback: (value, index, ticks) =>
                mapValueToLabel(value as number),
            },
          },
        },
      },
    } as ChartConfiguration);
  }, [data]);

  return (
    <>
      <canvas ref={radarRef}></canvas>
    </>
  );
};
