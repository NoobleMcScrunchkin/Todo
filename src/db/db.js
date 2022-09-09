import Sequelize from "sequelize";
import dotenv from "dotenv";

let DB_HOST;
let DB_PORT;
let DB_NAME;
let DB_USERNAME;
let DB_PASSWORD;

if (!import.meta || !import.meta.env) {
	dotenv.config();
	DB_HOST = process.env.DB_HOST;
	DB_PORT = process.env.DB_PORT;
	DB_NAME = process.env.DB_NAME;
	DB_USERNAME = process.env.DB_USERNAME;
	DB_PASSWORD = process.env.DB_PASSWORD;
} else {
	DB_HOST = import.meta.env.DB_HOST;
	DB_PORT = import.meta.env.DB_PORT;
	DB_NAME = import.meta.env.DB_NAME;
	DB_USERNAME = import.meta.env.DB_USERNAME;
	DB_PASSWORD = import.meta.env.DB_PASSWORD;
}

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: "mysql",
	logging: false,
});

try {
	await sequelize.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

export default sequelize;
