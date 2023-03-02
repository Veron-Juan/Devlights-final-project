import userModel from "../schemas/user";

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
    userModel.find({ id: userId }, (error, data) => {
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
        { id: userId}, userData, 
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
    userModel.findOneAndDelete({ id: userId }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
}

export default {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
  };