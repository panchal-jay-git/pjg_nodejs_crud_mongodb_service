const express = require('express')
const { getEmployees,setEmployee,deleteEmployee,updateEmployee,getEmployee } = require('./employee/employee')

const router = express.Router();
router.get("/employee", getEmployees);
router.post("/employee", setEmployee);
router.put("/employee", updateEmployee);
router.get("/employee", getEmployee);
router.delete("/employee", deleteEmployee);

module.exports = router;


