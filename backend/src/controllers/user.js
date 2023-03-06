import userRepository from "../repositories/user.js"

export const getAllUsers = async (req, res) => {
    try{
        const response = await userRepository.getAllUsers();
        res.send(response)
    } catch (error) {
        console.log(error)
    }
    
  };

export const getUserById = async (req, res) => {
  try{
    const user = await userRepository.getUserById(req.params.id);
    res.json({ user });
  } catch(error){
    console.log(error)
  }
  }
  
  export const updateUser = async (req, res) => {
    try {
      const user = await userRepository.updateUser(req.body, req.params.userId);
  
      res.json({ user })
    }catch (error) {
      res.status(500).json({ error });
    }
  }

export const deleteUser = async (req, res) => {
    try {
      const user = userRepository.deleteUser(req.params.userId)
  
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error })
    }
  }