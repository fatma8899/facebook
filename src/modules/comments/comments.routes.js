import { Router } from "express";
const router = Router()
import *as CC from "./comments.controller.js"


router.get("/",CC.getComments)
router.post("/addcomments",CC.addcomments)
router.delete("/:id",CC.deletecomments)
router.put("/:id",CC.updatecomments)



    



export default router