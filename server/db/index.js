require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
});

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database :)');
  };
});

module.exports = pool;