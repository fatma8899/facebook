import commentsmodels from "../../../DB/models/commentsmodels.js"




 export const getComments=async (req,res,next)=>{
    const comments= await commentsmodels.findAll()
    return res.json(comments) 

 }
 export const addcomments= async (req,res,next)=>{
    const {content,userId,postId}=req.body
    const comments= await commentsmodels.bulkCreate(req.body)
 
    return res.json(comments)
  } 
 
 
 
  export const deletecomments=async(req,res,next)=>{
    const {id}=req.params
    const deleted=await commentsmodels.destroy({where:{id}})
    return res.json(deleted)
 }
 
 
 
 
 export const updatecomments= async(req,res,next)=>{
    const {id}=req.params
    const {content}=req.body
    const updated= await commentsmodels.update({content},{where:{id}})
    return res.json(updated)
 }