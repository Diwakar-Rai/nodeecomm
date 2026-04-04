const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

connection.connect((err) => {
  if (err) throw err;

  connection.query("CREATE DATABASE IF NOT EXISTS ecommerce", (err) => {
    if (err) throw err;

    connection.query("USE ecommerce", (err) => {
      if (err) throw err;

      const sql = `CREATE TABLE IF NOT EXISTS products(
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                price DECIMAL(10,2)
            )`;

      connection.query(sql, (err) => {
        if (err) throw err;

        console.log("setup done");
        connection.end();
      });
    });
  });
});
