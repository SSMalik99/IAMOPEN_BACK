
const User = require('../Controllers/UserController');

const authenticateUser = async (req, res, next) => {
    

    let userFound = await User.getUserWithEmailAndPassword() 
    
      userFound ? next() : res.status(401).json({
        status: false, message: "You are not authorized"
    })
      
    
  };

  module.exports = authenticateUser