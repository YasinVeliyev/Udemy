const { DataTypes } = require("sequelize");
const sequelize = require("./connect")();

const Employees = sequelize.define("employees", {
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
	},
	doj: {
		type: DataTypes.DATE,
		allowNull: false,
	},
});
// Employees.sync({ force: true });
module.exports = Employees;
