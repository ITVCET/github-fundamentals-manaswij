const sql = require('mssql')
const sqlConfig = {
  user: manaswij,
  password: root,
  database: mssql,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}