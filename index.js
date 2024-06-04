import express from "express"
import connectionDB from "./DB/connectionDB.js"
import usersRouter from "./src/modules/users/users.routs.js"
import postRouter from "./src/modules/posts/posts.routes.js"
import commentsRouter from "./src/modules/comments/comments.routes.js"
const app = express()
const port= process.env.port || 7000


app.use(express.json())
app.use("/users", usersRouter)
app.use("/comments",commentsRouter)
app.use("/posts",postRouter)
app.use("/addcomments",commentsRouter)

connectionDB()






app.use( "*",(req,res,next)=> {

return res.json ({msg: "404 not found"})

})

app.listen(port, () =>{
    console.log("server is running on port 7000")
})