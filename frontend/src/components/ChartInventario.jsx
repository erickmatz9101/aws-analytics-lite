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

export default function ChartInventario() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/inventario")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: data.map((p) => p.nombre),
    datasets: [
      {
        label: "Stock disponible",
        data: data.map((p) => p.stock),
        backgroundColor: "red"
      }
    ]
  };

  return <Bar data={chartData} />;
}
