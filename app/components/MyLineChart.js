"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};


const MyLineChart = ({picks}) => {

  const reversedPicks = [...picks].reverse()

  const chartData = reversedPicks.reduce((acc, obj) => {
    const lastValue = acc[acc.length - 1] || 0; // Último valor o 0 si el array está vacío
    const newValue = obj.result === "W"
      ? Number((obj.stars / Math.abs(obj.odds) * 100).toFixed(2)) // Gana: cálculo positivo
      : obj.result === "D"
        ? 0 // Empate: 0
        : -obj.stars; // Pierde: negativo
  
    acc.push(lastValue + newValue); // Acumulamos el valor
    return acc;
  }, [0]);

  const chartLabels = chartData.map((_, index) => index.toString());

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Unidades',
        data: chartData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return <Line options={options} data={data} />
};

export default MyLineChart;