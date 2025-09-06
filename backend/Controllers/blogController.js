import Blog from "../Models/blog.js";

export const createBlog = async (req, res) => {
  try {
    const { title, image, hashtag, content } = req.body;
    if (title === "" || image === "" || content === "") {
      res.status(500).json({
        message: "Please put some content",
        success: false,
      });
    }

    const newBlogCreated = new Blog({ title, image, hashtag, content });
    await newBlogCreated.save();

    res.status(201).json({
      message: "Blog created successfully",
      sucess: true,
      newBlogCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "some thing error while creating the blog",
      error,
    });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const allBlog = await Blog.find();
    if (!allBlog) {
      res.status(404).json({
        success: false,
        message: "there is no blog found",
      });
    }
    res.status(200).json(allBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "some thing error while fetching all the blog",
      error,
    });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogById = await Blog.findById(id);

    if (!blogById) {
      res.status(404).json({
        success: false,
        message: "blog is not found",
      });
    }

    res.status(200).json(blogById);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "some thing error while fetching blog by id",
      error,
    });
  }
};
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogById = await Blog.findByIdAndDelete(id);

    if (!blogById) {
      res.status(404).json({
        success: false,
        message: "blog is not found",
      });
    }

    res.status(200).json(blogById);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "some thing error while delete blog by id",
      error,
    });
  }
};
