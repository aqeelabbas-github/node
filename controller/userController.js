const { sql,poolPromise } = require('../database/db')
const sqlSpName='DS_User';

class userController {

    async validateUser(req , res){
        //sqlQuery="SELECT TOP(1) * FROM [dbo].[UserMaster] WHERE UserId = @userID  AND UserPwd = @userPwd AND CCode = @ccode";

         try {
          if(req.body.userId != null && req.body.userPwd != null && req.body.ccode != null) {
        //sqlQuery = "exec DS_User @serviceName='validateUser', @ccode='" +  req.body.ccode +"', @userId='" + req.body.userId + "', @userPwd='" + req.body.userPwd + "' ;";

            const pool = await poolPromise
            const result = await pool.request()
            .input('serviceName',sql.VarChar, 'validateUser')
            .input('userId',sql.VarChar, req.body.userId)
            .input('userPwd',sql.VarChar, req.body.userPwd)
            .input('ccode', sql.VarChar, req.body.ccode)
          .execute(sqlSpName)
            res.json(result)
          } else {
            res.send('Data is incomplete!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }

      async validateUserold(req , res){
        //sqlQuery="SELECT TOP(1) * FROM [dbo].[UserMaster] WHERE UserId = @userID  AND UserPwd = @userPwd AND CCode = @ccode";
        sqlQuery="exec DS_User @ServiceName='validateUser', @ccode=@ccode AND @userId= @userId, @userPwd=@userPwd";

        //let query = "exec LoginMember @SSN='" + ssn + "', @PASSWORD='" + password + "';";
        try {
          if(req.body.userId != null && req.body.userPwd != null && req.body.ccode != null) {
            const pool = await poolPromise
            const result = await pool.request()
            .input('UserId',sql.VarChar, req.body.userId)
            .input('UserPwd',sql.VarChar, req.body.userPwd)
            .input('CCode', sql.VarChar, req.body.ccode)
            .query(sqlQuery)
            res.json(result)
          } else {
            res.send('Data is incomplete!')
          }
        } catch (error) {
          res.status(500)
          res.send(error.message)
      }
      }      

}
const controller = new userController();
module.exports = controller;