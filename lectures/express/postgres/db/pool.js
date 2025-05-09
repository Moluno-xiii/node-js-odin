const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_ROLE_NAME,
  database: process.env.PG_DATABASE,
  password: process.env.PG_ROLE_PASSWORD,
  part: 5432,
});
