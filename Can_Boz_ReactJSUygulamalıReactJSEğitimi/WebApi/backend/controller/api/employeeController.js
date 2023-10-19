const Employee = require("../../model/Employee");

exports.getEmployees = async (req, res) => {
	const employees = await Employee.findAll();
	return res.status(200).json(employees);
};

exports.createEmployee = async (req, res) => {
	const { name, email, department } = req.body;
	try {
		const employee = await Employee.create({ name, email, department });
		res.status(201).json(employee);
	} catch (error) {
		return res.status(500).json({ msg: "Failed to create employee", error: error });
	}
};
