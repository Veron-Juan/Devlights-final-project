import * as service from "../services/publication.service.js";



const getPublications = async (req, res) => {
  try {
    res.send("holaaaaaaaaa")
    console.log("holaaaa")
    const response = await service.getPostsService();
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

// const getPublication = async ({ params }, res) => {
//   try {
//     const { id } = params;
//     const response = await service.getPostService(id);
//     const data = response ? response : "NOT_FOUND";
//     res.send(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

const updatePublication = async ({ params, body }, res) => {
  try {
    const { id } = params;
    const response = await service.updateservice(id, body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};


const postPublication = async ({ body }, res) => {
  try {
    const response = await service.createPublicationService(body);
    res.send(response);
  } catch (error) {
    console.error(error);
  }
};

const deletePublication = async ({ params }, res) => {
  try {
    const { id } = params;
    const responseVideo = await service.deletePublicationService(id);
    res.send(responseVideo);
  } catch (error) {
    console.error(error);
  }
};

export {
  
  getPublications,
  deletePublication,
  postPublication,
  updatePublication,
};
