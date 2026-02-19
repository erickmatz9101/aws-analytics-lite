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

export default function ChartFinanzas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/finanzas")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  const chartData = {
    labels: data.map((f) => f.mes),
    datasets: [
      {
        label: "Ingresos",
        data: data.map((f) => f.ingresos),
        borderColor: "blue",
        backgroundColor: "lightblue",
        tension: 0.3
      },
      {
        label: "Egresos",
        data: data.map((f) => f.egresos),
        borderColor: "red",
        backgroundColor: "pink",
        tension: 0.3
      }
    ]
  };

  return <Line data={chartData} />;
}
