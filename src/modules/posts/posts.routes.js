import { Router } from "express";
const router = Router() 

import * as PC from "./posts.controller.js"


router.get("/", PC.getPosts)


router.post("/newposts",PC.addPosts)
router.get("/getAllposts",PC.getAllPosts)
router.put("/:id",PC.updatePost)
router.delete("/:id",PC.deletePost)
router.put("/update/:id", PC.updated)
router.get("/get/:id", PC.getPost)




export default router