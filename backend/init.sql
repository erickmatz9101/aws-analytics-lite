-- Tabla de ventas
CREATE TABLE IF NOT EXISTS ventas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mes VARCHAR(50),
  total INT
);

INSERT INTO ventas (mes, total) VALUES
('Enero', 1200), ('Febrero', 1500), ('Marzo', 1800), ('Abril', 2000), ('Mayo', 2500),
('Junio', 3000), ('Julio', 2800), ('Agosto', 3200), ('Septiembre', 3500), ('Octubre', 4000),
('Noviembre', 4200), ('Diciembre', 4500), ('Enero 2026', 4700), ('Febrero 2026', 5000), ('Marzo 2026', 5200);

-- Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  vendidos INT
);

INSERT INTO productos (nombre, vendidos) VALUES
('Laptop', 35), ('Mouse', 50), ('Teclado', 20), ('Monitor', 15), ('Tablet', 25),
('Impresora', 12), ('Auriculares', 40), ('Silla ergonómica', 18), ('Webcam', 22), ('Disco externo', 30),
('Smartphone', 55), ('Router', 28), ('Proyector', 10), ('Cámara', 14), ('Micrófono', 19);

-- Tabla de inventario
CREATE TABLE IF NOT EXISTS inventario (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  stock INT
);

INSERT INTO inventario (nombre, stock) VALUES
('Laptop', 5), ('Mouse', 2), ('Teclado', 8), ('Monitor', 1), ('Tablet', 12),
('Impresora', 4), ('Auriculares', 20), ('Silla ergonómica', 7), ('Webcam', 3), ('Disco externo', 9),
('Smartphone', 15), ('Router', 6), ('Proyector', 2), ('Cámara', 5), ('Micrófono', 11);

-- Tabla de clientes
CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mes VARCHAR(50),
  nuevos INT
);

INSERT INTO clientes (mes, nuevos) VALUES
('Enero', 10), ('Febrero', 15), ('Marzo', 8), ('Abril', 12), ('Mayo', 20),
('Junio', 18), ('Julio', 25), ('Agosto', 22), ('Septiembre', 30), ('Octubre', 28),
('Noviembre', 35), ('Diciembre', 40), ('Enero 2026', 38), ('Febrero 2026', 42), ('Marzo 2026', 45);

-- Tabla de finanzas
CREATE TABLE IF NOT EXISTS finanzas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mes VARCHAR(50),
  ingresos INT,
  egresos INT
);

INSERT INTO finanzas (mes, ingresos, egresos) VALUES
('Enero', 1200, 800), ('Febrero', 1500, 900), ('Marzo', 1800, 1000), ('Abril', 2000, 1100), ('Mayo', 2500, 1200),
('Junio', 3000, 1500), ('Julio', 2800, 1400), ('Agosto', 3200, 1600), ('Septiembre', 3500, 1700), ('Octubre', 4000, 1800),
('Noviembre', 4200, 1900), ('Diciembre', 4500, 2000), ('Enero 2026', 4700, 2100), ('Febrero 2026', 5000, 2200), ('Marzo 2026', 5200, 2300);
