import { Router } from "express";
const router = Router()




import *as UC from "./users.controller.js"

router.get("/",UC.getUsers)

router.post("/",UC.addUsers)
router.get("/signin",UC.signin)
router.get("/:userId/:postId",UC.getUserWithPostAndComments)







export default router