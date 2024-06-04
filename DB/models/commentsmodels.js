import { DataTypes } from "sequelize";
import { sequelize } from "../connectionDB.js";
import usermodels from "./usersmodels.js";
import postmodels from "./postsmodels.js";



const commentmodels = sequelize.define ("comment",{
    content:{
        type:DataTypes.STRING,
        allowNull:false
    }
})



usermodels.hasMany(commentmodels)
commentmodels.belongsTo(usermodels,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

postmodels.hasMany(commentmodels)
commentmodels.belongsTo(postmodels,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})


export default commentmodels