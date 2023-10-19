const express = require("express");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const employeeRouter = require("./routes/employeeRouter");
const departmentRouter = require("./routes/departmentRouter");

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/employees", employeeRouter);
app.use("/api/departments", departmentRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
