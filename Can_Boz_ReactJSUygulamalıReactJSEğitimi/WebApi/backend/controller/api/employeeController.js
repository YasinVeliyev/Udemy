const Employees = require("../../model/Employees");

exports.getEmployees = async (req, res) => {
	const employees = await Employees.findAll();
	return res.status(200).json(employees);
};
