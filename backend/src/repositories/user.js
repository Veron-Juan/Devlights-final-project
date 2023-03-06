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

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
