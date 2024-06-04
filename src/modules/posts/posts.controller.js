import postmodels from "../../../DB/models/postsmodels.js"

import usermodels from "../../../DB/models/usersmodels.js"


export const getPosts=async(req,res,next)=>{
const posts= await postmodels.findAll()
return res.json({msg:"done",posts})
}
export const addPosts = async (req,res,next)=>{
    const {title,content,userId}=req.body
    const newposts=await postmodels.bulkCreate(req.body)
    return res.json(newposts)


}
export const getAllPosts=async(req,res,next)=>{
    const posts= await postmodels.findAll()
    return res.json({msg:"done",posts})
    }



export const updatePost=async(req,res,next)=>{
    const {id}=req.params
    const {content}=req.body
    const updated= await postmodels.update({content},{where:{id}})
    return res.json(updated)
}


export const deletePost=async(req,res,next)=>{
    const {id}=req.params
    const deleted=await postmodels.destroy({where:{id}})
    return res.json(deleted)
}


export const updated = async (req, res, next) => {
    const { id } = req.params;
    const { content, userId } = req.body;


    const post = await postmodels.findOne({ where: { id } });
    if (post.userId !== userId) {
        return res.status(403).json({ msg: " You can only update your own posts." });
    }

    const update = await postmodels.update({ content }, { where: { id } });
    if (!update[0]) {
        console.log("post not found");
    }
    return res.json({ msg:"done"});
};


export const getPost = async (req, res, next) => {
    const { id } = req.params;
    const post = await postmodels.findOne({
        where: { id },
        include: [
            {
                model: usermodels,
                attributes: ['userName']
            }
        ]
    });

    if (!post) {
        return res.status(404).json({ msg: "Post not found" });
    }

    return res.json({ msg: "done",post});
};