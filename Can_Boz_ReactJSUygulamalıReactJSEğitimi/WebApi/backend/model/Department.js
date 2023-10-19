const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./connect")();

const Department = sequelize.define("departments", {
	department_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
});

// Departments.sync({ force: true });

module.exports = Department;
