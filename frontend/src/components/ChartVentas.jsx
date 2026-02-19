import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartVentas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ventas")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: data.map((venta) => venta.mes),
    datasets: [
      {
        label: "Ventas mensuales",
        data: data.map((venta) => venta.total),
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.3
      }
    ]
  };

  return <Line data={chartData} />;
}
