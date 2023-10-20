const express = require("express");
require("dotenv").config();
const cors = require("cors");

const employeeRouter = require("./routes/employeeRouter");
const departmentRouter = require("./routes/departmentRouter");

app = express();
app.use(
	cors({
		origin: "http://localhost:5173",
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/employees", employeeRouter);
app.use("/api/departments", departmentRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
