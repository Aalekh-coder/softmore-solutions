import cookieParser from "cookie-parser";
import express, { json, urlencoded } from "express"
import userRouter from "./Routes/formRoute.js"
import { PORT } from "./Config/env.js";
import cors from "cors"
import connectDB from "./Config/db.js";
import blogRouter from "./Routes/blogRoute.js";

const app = express()

app.use(json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
app.use(
    cors({
      origin:"*",
      methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

  app.use("/api",userRouter);
  app.use("/blog",blogRouter)

  app.get("/", (req, res) => {
    res.send("hello to the skechkingston")
})

  app.listen(PORT, () => {
     connectDB()
     console.log(`server running on port http://localhost:${PORT}`); 
  })