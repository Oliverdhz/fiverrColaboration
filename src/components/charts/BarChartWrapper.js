import React, { useRef, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const data = [
  { year: 2016, Problemas: 500 },
  { year: 2017, Problemas: 700 },
  { year: 2018, Problemas: 900 },
  { year: 2019, Problemas: 650 },
  { year: 2020, Problemas: 800 },
  { year: 2016, Problemas: 500 },
  { year: 2017, Problemas: 700 },
  { year: 2018, Problemas: 900 },
  { year: 2019, Problemas: 650 },
  { year: 2020, Problemas: 800 },
  { year: 2021, Problemas: 550 },
  { year: 2022, Problemas: 750 },
  { year: 2023, Problemas: 850 },
  { year: 2024, Problemas: 600 },
  { year: 2025, Problemas: 600 },
  { year: 2026, Problemas: 600 },
  { year: 2027, Problemas: 600 },
];

const BarChartWrapper = () => {
  const chartRef = useRef(null);
  const [chartHeight, setChartHeight] = useState(400);

  useEffect(() => {
    const updateChartDimensions = () => {
      const parentWidth = chartRef.current.offsetWidth;

      if (parentWidth <= 640) {
        setChartHeight(250);
      } else {
        setChartHeight(400);
      }
    };

    updateChartDimensions();
    window.addEventListener("resize", updateChartDimensions);

    return () => {
      window.removeEventListener("resize", updateChartDimensions);
    };
  }, []);

  return (
    <div
      tw="w-full mt-20 bg-white border border-[#E5E7EB] rounded-lg overflow-auto max-w-full style-scrollbar-barchart"
      ref={chartRef}
    >
      <BarChart width={1800} height={chartHeight} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="2 2" vertical={false} />

        <XAxis dataKey="year" />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Problemas" width={82}>
          {data.map((entry, index) => (
            <Cell
              width={82}
              key={`bar-${index}`}
              fill={index % 2 === 0 ? "#00A3FF" : "#005D91"}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default BarChartWrapper;
