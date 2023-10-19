const { Router } = require("express");
const departmentController = require("../controller/api/departmentController");
const router = Router({ mergeParams: true });

router.route("/").get(departmentController.getDepartments).post(departmentController.createDepartment).put(departmentController.updateDepartment);

module.exports = router;
