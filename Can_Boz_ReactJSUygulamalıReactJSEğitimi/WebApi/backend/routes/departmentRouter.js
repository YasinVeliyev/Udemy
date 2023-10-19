const { Router } = require("express");
const departmentController = require("../controller/api/departmentController");
const router = Router({ mergeParams: true });

router.route("/").get(departmentController.getDepartments).post(departmentController.createDepartment);
router
	.route("/:id")
	.put(departmentController.updateDepartment)
	.delete(departmentController.deleteDepartment)
	.get(departmentController.getDepartmentById);

module.exports = router;
