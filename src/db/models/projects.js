import DataTypes from "sequelize";
import sequelize from "../db.js";

const Project = await sequelize.define(
	"Projects",
	{
		uuid: {
			type: DataTypes.UUID,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{}
);

export default Project;
