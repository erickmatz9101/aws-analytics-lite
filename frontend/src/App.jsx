import ChartVentas from "./components/ChartVentas";
import ChartProductos from "./components/ChartProductos";
import ChartInventario from "./components/ChartInventario";
import ChartClientes from "./components/ChartClientes";
import ChartFinanzas from "./components/ChartFinanzas";

function App() {
  return (
    <div>
      <h1>Dashboard de Ventas</h1>
      <ChartVentas />
      <ChartProductos />
      <ChartInventario />
      <ChartClientes />
      <ChartFinanzas />
    </div>
  );
}

export default App;
