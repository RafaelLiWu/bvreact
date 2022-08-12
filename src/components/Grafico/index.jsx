import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: "transparent",
      },
    },
    y: {
      grid: {
        display: false,
        borderColor: "transparent",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const data = {
  datasets: [
    {
      fill: false,
      label: "Dataset 2",
      data: [
        { x: "Maio 21", y: 20 },

        { x: "Maio 22", y: 50 },

        { x: "Maio 23", y: 30 },
      ],
      borderColor: "rgb(10, 21, 32)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointStyle: "circle",
      pointRadius: 0,
      borderWidth: 1.5,

      tension: 0.2,
    },
  ],
};

export default function Grafico() {
  return (
    <div style={{ height: 980, width: 620 }}>
      <Line options={options} data={data} />
    </div>
  );
}
