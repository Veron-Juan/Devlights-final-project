import postRepository from "../repositories/publications.js"



export const getPublications = async (req, res) => {
  try {
    res.send("holaaaaaaaaa")
    console.log("holaaaa")
    const response = await postRepository.getAllPosts();
    res.json({response});
  } catch (error) {
    console.error(error);
  }
};

export const getPublication = async (req, res) => {
  try{
    const publication = await postRepository.getPostById(req.params.id);
    res.json({ publication });
  } catch(error){
    console.log(error)
  }
};

export const updatePublication = async (req, res) => {
  try {
    const publication = await postRepository.updatePost(req.body, req.params.userId);

    res.json({ publication })
  }catch (error) {
    res.status(500).json({ error });
  }
}


export const postPublication = async (req, res) => {
  const {body} = req
  const publication = await postRepository.newPost(body);
  res.send(publication);
};

export const deletePublication = async ({ params }, res) => {
  try {
    const publication = postRepository.deletePost(req.params.userId)

    res.json({ publication });
  } catch (error) {
    res.status(500).json({ error })
  }
};

// export {
  
//   getPublications,
//   deletePublication,
//   postPublication,
//   updatePublication,
// };
