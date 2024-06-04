import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize('b8k1zfkrrx1bezesaj6a', 'uq4lvdi03pbknwsz', '2BWYTNK2ZhcuxEG9Y3l6', {
    host: 'b8k1zfkrrx1bezesaj6a-mysql.services.clever-cloud.com',
    dialect: "mysql"
  });






  const connectionDB= async()=> {

     await sequelize.sync({alter:false,force:false}).then (()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("Error connecting to database");
    })

  }



  export default connectionDB