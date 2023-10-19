const { Router } = require("express");
const departmentController = require("../controller/api/departmentController");
const router = Router({ mergeParams: true });

router.get("/", departmentController.getDepartments);

module.exports = router;
