const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",         
  password: "091603",  
  host: "localhost",
  port: 5432,
  database: "newdb",         
});

module.exports = pool;
