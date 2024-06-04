import { sequelize } from "../connectionDB.js";
import { DataTypes } from "sequelize";
import usermodels from "./usersmodels.js";

const postmodels = sequelize.define("post",{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
    
})

usermodels.hasMany (postmodels)
postmodels.belongsTo(usermodels,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})


export default postmodels