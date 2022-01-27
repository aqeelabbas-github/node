const express =  require('express');
const controller = require('../controller/controller')

const user = require('../controller/userController')
const company = require('../controller/companyController')
const accountYear = require('../controller/accountYearController')
const account = require('../controller/accountController')
const tax = require('../controller/taxController')

const report = require('../controller/reportController')

const router = express.Router();
router.get('/api/getAllData', controller.getAllData);
router.post('/api/addNewData' , controller.addNewData);
router.put('/api/updateData',controller.updateData);
router.delete('/api/deleteData' , controller.deleteData);

//--- User
router.post('/api/user/validateUser' , user.validateUser);

//--- Company
router.get('/api/company/getAll', company.getAll)

//--- accountYear
router.get('/api/accountYear/getAll', accountYear.getAll)

//--- account
router.get('/api/account/getAllParent/:ccode', account.getAllParent)
router.get('/api/account/getAll/:ccode', account.getAll)
router.get('/api/account/findByCode/:acccode', account.findByCode)
router.post('/api/account/save', account.save)

//--- reports
router.get('/api/report/saleBalanceBill' , report.saleBalanceBill);


/* //--- tax
router.get('/api/tax/getAll/:ccode', tax.get)
router.get('/api/tax/findByCode/:taxcode', tax.findByCode)
router.post('/api/tax/save', tax.save) */


module.exports = router;