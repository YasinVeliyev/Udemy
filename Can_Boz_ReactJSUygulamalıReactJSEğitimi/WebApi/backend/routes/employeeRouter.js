const { Router } = require("express");
const employeeController = require("../controller/api/employeeController");
const router = Router({ mergeParams: true });

router.route("/").get(employeeController.getEmployees).post(employeeController.createEmployee);

module.exports = router;
