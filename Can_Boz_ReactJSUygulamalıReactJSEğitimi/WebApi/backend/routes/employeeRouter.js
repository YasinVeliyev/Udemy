const { Router } = require("express");
const employeeController = require("../controller/api/employeeController");
const router = Router({ mergeParams: true });

router.get("/", employeeController.getEmployees);

module.exports = router;
