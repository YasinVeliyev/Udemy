const Departments = require("../../model/Departments");

exports.getDepartments = async (req, res) => {
	const departments = await Departments.findAll();
	return res.status(200).json(departments);
};
