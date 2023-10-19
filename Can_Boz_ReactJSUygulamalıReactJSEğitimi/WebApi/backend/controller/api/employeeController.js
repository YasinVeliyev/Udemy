const Employee = require("../../model/Employee");

exports.getEmployees = async (req, res) => {
	const employees = await Employee.findAll();
	return res.status(200).json(employees);
};

exports.getEmployeeById = async (req, res) => {
	const { id: employee_id } = req.params;
	const employee = await Employee.findOne({ where: { employee_id } });
	if (employee) {
		return res.status(200).json({ status: "success", employee });
	} else {
		return res.status(404).json({ status: "failed", msg: "Employee does not exist" });
	}
};

exports.createEmployee = async (req, res) => {
	const { name, email, department } = req.body;
	try {
		const employee = await Employee.create({ name, email, department });
		res.status(201).json(employee);
	} catch (error) {
		return res.status(500).json({ msg: "Failed to create employee", error: error, status: "fail" });
	}
};

exports.updateEmployee = async (req, res) => {
	const { id } = req.params;
	const { name, email, department } = req.body;

	try {
		const updated = await Employee.update({ name, email, department }, { where: { employee_id: id } });
		if (updated[0]) {
			return res.status(200).json({ msg: "Update Successfuly", status: "success" });
		}
		return res.status(404).json({ status: "failed", msg: "Employee does not exist" });
	} catch (error) {
		return res.status(500).json({ msg: "Failed to update employee", error: error, status: "fail" });
	}
};

exports.deleteEmployee = async (req, res) => {
	const { id: employee_id } = req.params;
	const count = await Employee.destroy({ where: { employee_id } });
	if (count) {
		return res.status(200).json({ status: "success" });
	} else {
		return res.status(404).json({ status: "failed", msg: "Employee does not exist" });
	}
};
