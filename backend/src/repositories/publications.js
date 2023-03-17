import PostModel from "../schema/publication/publication.js";
import multer from "multer";
import fs from "fs"

const getAllPosts = async ()=> {
    try{
            const allData = await PostModel.find({})
            return allData
            // res.json(allData)
        
    } catch (err) {
        res.status(500).json(err);
      }
}

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// upload.single("testImage")
const newPost =  async  (req,  res) =>{
  // upload.single("testImage")
    
    const saveImage =  PostModel({
        name: req.body.name,
        img: {
          data: req.file.buffer,
          contentType: req.file.mimetype
        },
        contact: req.body.contact,
        location: req.body.location,
        description: req.body.description,
        nameUser: req.body.nameUser,
        lastnameUser: req.body.lastnameUser,

      });
  
      await saveImage.save()
      // const image = saveImage.img.data.toString('base64');
      const image = saveImage.img.data.toString("base64")
      const contentType = saveImage.contentType;
      res.json({ image, contentType });
      
    ;
};





const getPostById = async (id) => {
    const responsePost = await PostModel.findOne({ _id: id });
    return responsePost;
  
};

const updatePost = async (id, data) => {
    try {
      const responsePost = await PostModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      return responsePost;
    } catch (err) {
      res.status(500).json(err);
    }
  };

const deletePost = async (req, res) => {
    if (req.body.userId === req.params.id) {
      try {
        await PostModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };

export default {
    deletePost,
    updatePost,
    getPostById,
    getAllPosts,
    newPost
}