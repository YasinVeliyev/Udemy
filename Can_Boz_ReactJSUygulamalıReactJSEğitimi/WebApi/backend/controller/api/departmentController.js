const { where } = require("sequelize");
const Department = require("../../model/Department");

exports.getDepartments = async (req, res) => {
	console.log(req.header("x-forwarded-for"));
	const departments = await Department.findAll();
	return res.status(200).json(departments);
};

exports.createDepartment = async (req, res) => {
	try {
		const department = await Department.create({ name: req.body.name });
		return res.status(201).json(department);
	} catch (error) {
		return res.status(500).json({ msg: "Failed to add department" });
	}
};

exports.updateDepartment = async (req, res) => {
	const { oldName, newName } = req.body;
	if (oldName && newName) {
		try {
			const department = await Department.update({ name: newName }, { where: { name: oldName } });
			return res.status(201).json({ msg: "Update Successfuly" });
		} catch (error) {
			return res.status(500).json({ msg: "Failed to update department" });
		}
	}
	return res.status(400).json({ msg: "Old Name and New Name is required" });
};
