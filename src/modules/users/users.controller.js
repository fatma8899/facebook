import commentmodels from "../../../DB/models/commentsmodels.js"
import postmodels from "../../../DB/models/postsmodels.js"
import usermodels from "../../../DB/models/usersmodels.js"





export const getUsers= async(req,res,next)=>{
    const user=await usermodels.findAll()
    res.json({msg :"done", user})
}
export const addUsers=async(req,res,next)=>{
    const {userName,email,password}=req.body
    const users=await usermodels.bulkCreate(req.body)
    return res.json ({msg:"done",users})
}

export const signin = async(req,res,next)=>{
    const signinUser = await usermodels.findOne({
        where: {email:"nesma@gmail.com"}
      
    })
    return res.json(signinUser)
}
export const getUserWithPostAndComments = async (req, res, next) => {
    const { userId, postId } = req.params;
  
  
      const user = await usermodels.findOne({
        where: { id: userId },
      });
  
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
    
      const post = await postmodels.findOne({
        where: { id: postId, userId: userId },
      });
  
      if (!post) {
        return res.status(404).json({ msg: "Post not found" })
      }
  
     
      const comments = await commentmodels.findAll({
        where: { postId: postId },
      });
  
      
      return res.json({ msg: "done", user, post, comments })
  
  }
