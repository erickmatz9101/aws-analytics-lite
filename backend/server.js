app.use(cors());
app.use(express.json());

//Conexion a la bdd 
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


app.use(cors());
app.use(express.json());

// Conexión a MariaDB
const connection = mysql.createConnection({
  host: "54.83.19.232",            // IP pública de tu EC2
  user: "adminuser",               // usuario de MariaDB
  password: "NuevaPasswordSegura123!", // contraseña de MariaDB
  database: "pymesdb"              // nombre de la base de datos
});

connection.connect(err => {
  if (err) {
    console.error("Error conectando a MariaDB:", err);
    return;
  }
  console.log("Conexión a MariaDB establecida");
});

// Endpoint: Ventas
app.get("/ventas", (req, res) => {
  connection.query("SELECT * FROM ventas", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Inventario
app.get("/inventario", (req, res) => {
  connection.query("SELECT * FROM inventario", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Endpoint: Ventas
app.get("/ventas", (req, res) => {
  db.all("SELECT * FROM ventas", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Productos
app.get("/productos", (req, res) => {
  db.all("SELECT * FROM productos", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Inventario
app.get("/inventario", (req, res) => {
  db.all("SELECT * FROM inventario", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Clientes
app.get("/clientes", (req, res) => {
  db.all("SELECT * FROM clientes", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Endpoint: Finanzas
app.get("/finanzas", (req, res) => {
  db.all("SELECT * FROM finanzas", [], (err, rows) => {
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
