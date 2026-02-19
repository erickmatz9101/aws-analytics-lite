const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database.db");

db.serialize(() => {
    // Tabla de ventas
    db.run("CREATE TABLE IF NOT EXISTS ventas (id INTEGER PRIMARY KEY, mes TEXT, total INTEGER)");
    db.run(`INSERT INTO ventas (mes, total) VALUES
    ('Enero', 1200), ('Febrero', 1500), ('Marzo', 1800), ('Abril', 2000), ('Mayo', 2500),
    ('Junio', 3000), ('Julio', 2800), ('Agosto', 3200), ('Septiembre', 3500), ('Octubre', 4000),
    ('Noviembre', 4200), ('Diciembre', 4500), ('Enero 2026', 4700), ('Febrero 2026', 5000), ('Marzo 2026', 5200)`);

    // Tabla de productos
    db.run("CREATE TABLE IF NOT EXISTS productos (id INTEGER PRIMARY KEY, nombre TEXT, vendidos INTEGER)");
    db.run(`INSERT INTO productos (nombre, vendidos) VALUES
    ('Laptop', 35), ('Mouse', 50), ('Teclado', 20), ('Monitor', 15), ('Tablet', 25),
    ('Impresora', 12), ('Auriculares', 40), ('Silla ergonómica', 18), ('Webcam', 22), ('Disco externo', 30),
    ('Smartphone', 55), ('Router', 28), ('Proyector', 10), ('Cámara', 14), ('Micrófono', 19)`);

    // Tabla de inventario
    db.run("CREATE TABLE IF NOT EXISTS inventario (id INTEGER PRIMARY KEY, nombre TEXT, stock INTEGER)");
    db.run(`INSERT INTO inventario (nombre, stock) VALUES
    ('Laptop', 5), ('Mouse', 2), ('Teclado', 8), ('Monitor', 1), ('Tablet', 12),
    ('Impresora', 4), ('Auriculares', 20), ('Silla ergonómica', 7), ('Webcam', 3), ('Disco externo', 9),
    ('Smartphone', 15), ('Router', 6), ('Proyector', 2), ('Cámara', 5), ('Micrófono', 11)`);

    // Tabla de clientes
    db.run("CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY, mes TEXT, nuevos INTEGER)");
    db.run(`INSERT INTO clientes (mes, nuevos) VALUES
    ('Enero', 10), ('Febrero', 15), ('Marzo', 8), ('Abril', 12), ('Mayo', 20),
    ('Junio', 18), ('Julio', 25), ('Agosto', 22), ('Septiembre', 30), ('Octubre', 28),
    ('Noviembre', 35), ('Diciembre', 40), ('Enero 2026', 38), ('Febrero 2026', 42), ('Marzo 2026', 45)`);

    // Tabla de finanzas
    db.run("CREATE TABLE IF NOT EXISTS finanzas (id INTEGER PRIMARY KEY, mes TEXT, ingresos INTEGER, egresos INTEGER)");
    db.run(`INSERT INTO finanzas (mes, ingresos, egresos) VALUES
    ('Enero', 5000, 3200), ('Febrero', 6200, 4100), ('Marzo', 7000, 4500), ('Abril', 6800, 3900), ('Mayo', 7200, 4000),
    ('Junio', 7500, 4200), ('Julio', 7800, 4300), ('Agosto', 8000, 4400), ('Septiembre', 8200, 4600), ('Octubre', 8500, 4700),
    ('Noviembre', 8800, 4900), ('Diciembre', 9000, 5000), ('Enero 2026', 9300, 5100), ('Febrero 2026', 9500, 5200), ('Marzo 2026', 9800, 5300)`);
});

db.close();

