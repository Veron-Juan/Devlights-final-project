import PostModel from "../schema/publication/publication.js";

const getAllPosts = async ()=> {
    try{
            const allData = await PostModel.find({})
            return allData
            // res.json(allData)
        
    } catch (err) {
        res.status(500).json(err);
      }
}

const getPostById = async (id) => {
    const responsePost = await PostModel.findOne({ _id: id });
    return responsePost;
  
};

const getAllPostByUserId = async (id) => {
  const responsePost = await PostModel.find({user_id:id});
  return responsePost;

};

const updatePost = async (id, data) => {
    const responsePost = await PostModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    return responsePost
  };

const deletePost = async (id) => {
  const responsePost= await PostModel.findByIdAndDelete({_id: id})
  return responsePost;
    
  };

//acá iria la logica para publicar los post con multer


// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// upload.single("testImage")
// const newPost =  async  (req, res) =>{

//     const saveImage = await  PostModel({
//       name: req.body.name,
//       img: {
//         data: req.file.buffer,
//         contentType: req.file.mimetype
//       },
//       contact: req.body.contact,
//       location: req.body.location,
//       description: req.body.description,
//       petType: req.body.petType,
//       nameUser: req.body.nameUser,
//       lastnameUser: req.body.lastnameUser,

//       });
  
//       await saveImage.save()
//       // const image = saveImage.img.data.toString('base64');
//       const image = saveImage.img.data.toString("base64")
//       const contentType = saveImage.contentType;
//       res.json({ image, contentType });
      
//     ;
// };

export default {
    deletePost,
    updatePost,
    getPostById,
    getAllPosts,
    getAllPostByUserId,
}