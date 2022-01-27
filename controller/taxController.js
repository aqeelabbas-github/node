const { sql, poolPromise } = require('../database/db')
const sqlSpName='DS_Tax';

class taxController {

    async getAll(req, res) {
      try {
          if (req.query.ccode!= null) {
              const pool = await poolPromise
              const result = await pool.request()
              .input('serviceName',sql.VarChar, 'listAll')
              .input('ccode', sql.VarChar, req.query.ccode)
              .execute(sqlSpName)
              res.json(result)
          }
          else {
              console.log('error')
              res.status(400)
              res.json('Paramter not defined')
          }
      } catch (error) {
          console.log(error)
          res.status(500)
          res.send(error.message)
      }
  }

  async findByCode(req, res) {
    try {
        if (req.query.acccode!= null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('serviceName',sql.VarChar, 'findByCode')
            .input('acccode', sql.VarChar, req.query.acccode)
            .execute(sqlSpName)
            res.json(result)
        }
        else {
            console.log('error')
           error= {
                "status":400,
                "error":"Internal Server Error",
                "message":"No message available",
            }
            res.status(400)
            res.send("Not a valid Request format");
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
 
}
    async save(req , res){

        try {
          if(req.body.ccode != null && req.body.accCode != null && req.body.accName != null && req.body.parent != null && req.body.cashAccount != null && req.body.accType != null )  {
            const pool = await poolPromise
            const result = await pool.request()
            .input('serviceName',sql.VarChar, 'save')
            .input('ccode',sql.VarChar, req.body.ccode)
            .input('accCode',sql.VarChar, req.body.accCode)
            .input('accName', sql.VarChar, req.body.accName)
            .input('parent', sql.VarChar, req.body.parent)
            .input('cashAccount', sql.Bit, req.body.cashAccount)
            .input('accType', sql.VarChar, req.body.accType)

            .execute(sqlSpName)
            res.json(result.recordset)
            //console.log(result)
          } else {
            res.send('Data is incomplete!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }    

}
const controller = new taxController();
module.exports = controller;