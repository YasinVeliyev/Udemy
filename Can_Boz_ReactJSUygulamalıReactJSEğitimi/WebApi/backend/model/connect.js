const { Sequelize } = require("sequelize");
const config = require("./config");

function connect() {
	const sequelize = new Sequelize(config.development.url, {
		dialect: config.development.dialect,
	});

	sequelize
		.authenticate()
		.then(() => {
			console.log("Connection has been established successfully.");
		})
		.catch((err) => {
			console.error("Unable to connect to the database:", error);
		});

	return sequelize;
}

module.exports = connect;
