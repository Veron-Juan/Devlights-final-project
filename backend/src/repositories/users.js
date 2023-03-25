import userModel from "../schemas/user";
import user from "./user";

const getAllUsers = async () =>{
    const users = await userModel.find({}, (error, data) => {
         if (error) {
             res.json({ status: 500, data: error });
         }
         res.json({ status: 200, data });
     });
     
     return users;
 };

const getUserById = async (userId) => {
    userModel.find({ _id: userId }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data });
    });
};

const createUser = async (userData) => {
    const user = new userModel(userData);

    user.save().then((document) => {
            res.json({ status: 200, data: document });
        }).catch((error) => {
            res.json({ status: 500, data: error });
        });
}

const updateUser = async (userData, userId) => {
    userModel.findOneAndUpdate(
        { _id: userId}, userData, 
        {
            new: true
        },
         (error, data) => {
            if (error) {
                res.json({ status: 500, data: error });
            }

            res.json({ status: 200, data });
        }
    );
}

const deleteUser = async (userId) =>{
    userModel.findOneAndDelete({ _id: userId }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
}

//ver
const loginRepo = async (userData) => {
    const user = await user.findOne({ 
      where: {
        email: userData.email,
        password: userData.password
      }
    })
  
    if (user) {
      return true;
    } else {
      return false;
    }
  }

export default {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    loginRepo
  };