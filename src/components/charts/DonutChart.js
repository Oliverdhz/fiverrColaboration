import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const WorstProblems = () => {
  const chartRef = useRef(null);
  let Charete;
  useEffect(() => {
    Chart.register(...registerables);

    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["Mecanicos", "Electricos", "Pintura"],
      datasets: [
        {
          // label: "Worst Problems",
          data: [140, 20, 40],
          backgroundColor: ["#64748b", "#8B5CF6", "#5BADDB"],
        },
      ],
    };

    const options = {
      cutout: "62%",
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          titleFont: {
            size: 15
          },
          bodyFont: {
            size: 20
          },
          
        }
      },
    };

    if (Charete) Charete.destroy();

    Charete = new Chart(ctx, {
      type: "doughnut",
      data,
      options,
    });


  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default WorstProblems;
