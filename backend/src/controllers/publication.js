import postRepository from "../repositories/publications.js"



export const getPublications = async (req, res) => {
  try {
    const response = await postRepository.getAllPosts();
    res.send(response)
    res.json({response});
  } catch (error) {
    console.error(error);
  }
};

export const getLocations = async (req, res) => {
  try {
    const response = await postRepository.getAllLocations();
    res.json(response);
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

export const getAllPublicationByUserId = async (req, res) => {
  try{
    const publication = await postRepository.getAllPostByUserId(req.params.id);
    res.json({ publication });
  } catch(error){
    console.log(error)
  }
};

export const updatePublication = async (req, res) => {
  try {
    
    const { id } = req.params;
    const  { body } = req
    const publication = await postRepository.updatePost(id, body);
    res.send(publication)
  }catch (error) {
    res.status(500).json({ error });
  }
}

//no funciona por ahora
export const postPublication = async (req, res) => {
  const {body} = req
  const publication = await postRepository.newPost(body);
  res.send(publication);
};

export const deletePublication = async (req, res) => {
  try {
    const id = req.params.id
    const publication = await postRepository.deletePost(id)
    res.send({ publication });
    
  } catch (error) {
    res.status(500).json({ error })
  }
};


