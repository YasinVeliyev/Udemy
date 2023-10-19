const { DataTypes, Sequelize } = require("sequelize");
const validator = require("validator");
const sequelize = require("./connect")();

const Employee = sequelize.define("employees", {
	employee_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
		validate: { isEmail: true },
	},
	department: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	doj: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
});
// Employee.sync({ force: true });
module.exports = Employee;
