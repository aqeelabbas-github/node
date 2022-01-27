const sql = require('mssql')

let servername= String.raw`DELL-PC\SQLEXPRESS`;

const config = {
  port: 1433,

  // Local Settings
  user: 'sa',
  password: 'blackblack',
  database: 'eTrading_Shakoo',
  server: '127.0.0.1\\SQLEXPRESS', //'127.0.0.1\\SQL2014',

  // WAN Settings
  user: 'fluttter',
  password: '92300!@',
  database: 'eTrading_Shakoo',
  server: '182.184.110.120',

   //server: String.raw`DELL-PC\SQLEXPRESS2014`,
  //server: '127.0.0.1\\SQLEXPRESS', //'127.0.0.1\\SQL2014',
  //driver: 'msnodesqlv8', 

  options: {
      encrypt: false,
    enableArithAbort: true,
    requestTimeout: 300000
  }
} 
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
