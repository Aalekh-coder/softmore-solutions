import { Router } from "express";
import {createBlog,deleteBlogById,getAllBlog,getBlogById} from "../Controllers/blogController.js"

const blogRouter = Router();

blogRouter.post("/create-blog",createBlog);
blogRouter.delete("/:id",deleteBlogById);
blogRouter.get("/all-blog",getAllBlog)
blogRouter.get("/:id",getBlogById)


export default blogRouter