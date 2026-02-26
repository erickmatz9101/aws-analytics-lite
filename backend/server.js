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

// Clientes
app.get("/clientes", (req, res) => {
  connection.query("SELECT * FROM clientes", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Inventario
app.get("/inventario", (req, res) => {
  connection.query("SELECT * FROM inventario", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Finanzas
app.get("/finanzas", (req, res) => {
  connection.query("SELECT * FROM finanzas", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
