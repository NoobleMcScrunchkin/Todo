import sequelize from "./db.js";
import * as fs from "fs";

const models = new URL("models", import.meta.url);
const files = fs.readdirSync(models);

files.forEach(async (file) => {
	let model = await import("./models/" + file);
	model.default.sync({ alter: true }).then(() => {
		console.log("Synced " + file);
	});
});
