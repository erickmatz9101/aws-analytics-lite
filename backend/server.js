//Conexion a la bdd 
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express(); 
const PORT = 3000;

app.use(cors());
app.use(express.json());


// Conexión a MariaDB
const connection = mysql.createConnection({
    host: "::1", // conexión interna usando IPv6
    user: "adminuser",            // usuario de MariaDB
    password: "NuevaPasswordSegura123!", // contraseña de MariaDB
    database: "pymesdb"           // nombre de la base de datos
});

connection.connect(err => {
    if (err) {
        console.error("Error conectando a MariaDB:", err);
        return;
    }
    console.log("Conexión a MariaDB establecida");
});

// Clientes
app.get("/clientes", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM clientes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Productos
app.get("/productos", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM productos");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Inventario
app.get("/inventario", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM inventario");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Finanzas
app.get("/finanzas", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM finanzas");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
