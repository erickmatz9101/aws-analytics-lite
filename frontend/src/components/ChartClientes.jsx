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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

export default function ChartClientes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/clientes")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: data.map((c) => c.mes),
    datasets: [
      {
        label: "Clientes nuevos",
        data: data.map((c) => c.nuevos),
        borderColor: "green",
        backgroundColor: "lightgreen",
        tension: 0.3
      }
    ]
  };

  return <Line data={chartData} />;
}
