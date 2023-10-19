const { where } = require("sequelize");
const Department = require("../../model/Department");

exports.getDepartments = async (req, res) => {
	const departments = await Department.findAll();
	return res.status(200).json(departments);
};

exports.createDepartment = async (req, res) => {
	try {
		const department = await Department.create({ name: req.body.name });
		return res.status(201).json(department);
	} catch (error) {
		return res.status(500).json({ msg: "Failed to add department", status: "fail" });
	}
};

exports.updateDepartment = async (req, res) => {
	const { id: department_id } = req.params;
	const { name } = req.body;

	try {
		const department = await Department.update({ name }, { where: { department_id } });
		if (department[0]) {
			return res.status(200).json({ msg: "Update Successfuly" });
		}
		return res.status(404).json({ status: "failed", msg: "Department does not exist" });
	} catch (error) {
		return res.status(500).json({ msg: "Failed to update department", status: "fail", error });
	}
};

exports.deleteDepartment = async (req, res) => {
	const { id: department_id } = req.params;

	try {
		const deletedCount = await Department.destroy({ where: { department_id } });
		if (deletedCount) {
			return res.status(200).json({ status: "success" });
		}
		return res.status(404).json({ status: "failed", msg: "Department does not exist" });
	} catch (error) {
		return res.status(500).json({ msg: "Failed to delete department", status: "fail" });
	}
};

exports.getDepartmentById = async (req, res) => {
	const { id: department_id } = req.params;

	try {
		const department = await Department.findOne({ where: { department_id } });
		if (department) {
			return res.status(200).json({ status: "success", department });
		}
		return res.status(404).json({ status: "failed", msg: "Department does not exist" });
	} catch (error) {
		return res.status(500).json({ msg: "Failed to get department", status: "fail" });
	}
};
