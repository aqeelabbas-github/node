const { sql,poolPromise } = require('../database/db')
const sqlSpName='DS_AccountYear';

class accountYearController {

    async getAll(req , res){
        //sqlQuery="SELECT YEARCODE AS id, YEARNAME AS name FROM [dbo].[AccountYear]";
        //sqlQuery="exec DS_AccountYear @ServiceName=listAll";

        try {
            const pool = await poolPromise
            const result = await pool.request()
            .input('serviceName',sql.VarChar, 'listAll')
            .execute(sqlSpName)
            res.json(result)
        } catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }

}
const controller = new accountYearController();
module.exports = controller;