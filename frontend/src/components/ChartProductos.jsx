import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartProductos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: data.map((p) => p.nombre),
    datasets: [
      {
        label: "Productos más vendidos",
        data: data.map((p) => p.vendidos),
        backgroundColor: "orange"
      }
    ]
  };

  return <Bar data={chartData} />;
}
