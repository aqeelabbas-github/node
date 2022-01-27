const { sql,poolPromise } = require('../database/db')
const sqlSpName='rpt_SP';

class reportController {

    async saleBalanceBill(req , res){
        //sqlQuery="SELECT TOP(1) * FROM [dbo].[UserMaster] WHERE UserId = @userID  AND UserPwd = @userPwd AND CCode = @ccode";

         try {
          //if(req.body.toDate != null ) {
        //sqlQuery = "exec DS_User @serviceName='validateUser', @ccode='" +  req.body.ccode +"', @userId='" + req.body.userId + "', @userPwd='" + req.body.userPwd + "' ;";

            const pool = await poolPromise
            const result = await pool.request()
            .input('reportName',sql.VarChar, 'SaleBalanceBill')
            //.input('toDate',sql.Date, req.body.toDate)
          .execute(sqlSpName)
             
          res.json(result.recordset)
          } //else {
            //res.send('Data is incomplete!')
          //}
        //} 
        catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }

     

}
const controller = new reportController();
module.exports = controller;