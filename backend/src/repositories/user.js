import UserModel from "../schema/user/user.js";

const getAllUsers = async () => {
  try {
    const responseUsers = await UserModel.find({});
    return responseUsers;
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (id) => {
    const responseUser = await UserModel.findOne({ _id: id });
    return responseUser;
  
};

const updateUser = async (id, data) => {
  try {
    const responseUser = await UserModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    return responseUser;
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (id) => {
  const responseUser = await UserModel.findByIdAndDelete({_id: id})
  return responseUser;
    // try {
    //   await UserModel.findByIdAndDelete(req.params.id);
    //   res.status(200).json("User has been deleted...");
    // } catch (err) {
    //   res.status(500);
    // }
  
};

// const deleteCar = async (id: string) => {
//   const responseItem = await ItemModel.remove({ _id: id });
//   return responseItem;
// };

export default {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
