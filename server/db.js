const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",         
  password: "Libra101303",  
  host: "localhost",
  port: 5432,
  database: "newdb",         
});

module.exports = pool;
