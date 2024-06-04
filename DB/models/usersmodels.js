import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../connectionDB.js";

const usermodels = sequelize.define("user",{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }

})


export default usermodels