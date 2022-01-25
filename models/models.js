"use strict"

const { promisify } = require('util');
const mysql = require('mysql');
const dotenv = require("dotenv").config();
/*-- MySQL Connection --*/
let pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

/* Promisify Mysql Connection */
pool.query = promisify(pool.query);

(async () => {
  try {
    await pool.query('SELECT NOW() AS "theTime"');
    console.log("Mysql Connected");
  } catch (err) {
    console.log(err);
  }
})();
module.exports.pool = pool;