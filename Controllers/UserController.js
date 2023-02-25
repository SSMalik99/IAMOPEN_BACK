const User = require('../Models/User');



const getAllUsers = async (req, res) => {

  const users = await User.find({ role: 'user' })

  res.status(200).json({ users });

};

const getUserWithEmailAndPassword = async (req, res) => {
    const user = await User.findOne({_id:req.param.id})

    if(!user) {
        return false
    }
    return true
}

const getSingleUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id }).select('-password');
  
  if (!user) {
    res.status(404).json({
        status: false, message: "User not found"
    })
  }
  checkPermissions(req.user, user._id);
  res.status(200).json({ user });
};


const showCurrentUser = async (req, res) => {

//   get

};

// update user with user.save()
const updateUser = async (req, res) => {
  const { email, name } = req.body;

  if (!email || !name) {
    res.status(400).json({
            status: false, message: "Please provide the values"
        })
  }

  const user = await User.findOne({ email: req.email });

  user.email = email;
  user.name = name;

  await user.save();

  
  res.status(200).json({ status: true, message: "User is updated successfully"});
};

const updateUserPassword = async (req, res) => {
//   need to add
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
  getUserWithEmailAndPassword
};
