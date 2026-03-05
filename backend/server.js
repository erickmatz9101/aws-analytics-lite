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
    host: "172.31.19.88", // IP privada de EC2
    user: "adminuser",
    password: "NuevaPasswordSegura123!",
    database: "pymesdb"
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

// Ruta para obtener ventas
app.get("/ventas", (req, res) => {
    connection.query("SELECT * FROM ventas", (err, results) => {
        if (err) {
            console.error("Error en la consulta de ventas:", err);
            res.status(500).send("Error en la base de datos");
            return;
        }
        res.json(results);
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
