#! /user/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `CREATE TABLE IF NOT EXISTS usernames (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR ( 255 )
);

INSERT INTO usernames (username)
VALUES
('Dembe'),
('Kaplan'),
('Tom'),
('Ressler');
`;

async function main() {
  console.log("seeding...");

  const host = process.env.PG_HOST;
  const user = process.env.PG_ROLE_NAME;
  const password = process.env.PG_ROLE_PASSWORD;
  const database = process.env.PG_DATABASE;

  if (!host || !user || !password || !database) {
    console.error("Error: Missing required environment variables");
    process.exit(1);
  }

  const client = new Client({
    host,
    user,
    password,
    database,
    port: 5432,
  });

  //   const client = new Client({
  //     connectionString: `postgresql://${process.env.PG_ROLE_NAME}:${process.env.PG_ROLE_PASSWORD}@${process.env.PG_HOST}:5432/${process.env.PG_DATABASE}`,
  //   });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
