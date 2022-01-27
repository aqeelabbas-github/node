const { sql,poolPromise } = require('../database/db')
const sqlSpName='DS_Company';


class companyController {

    async getAll(req , res){
        //sqlQuery="SELECT CCODE AS id, CNAME AS name FROM [dbo].[Company]";
        //sqlQuery="exec DS_Company @ServiceName=listAll";

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
const controller = new companyController();
module.exports = controller;