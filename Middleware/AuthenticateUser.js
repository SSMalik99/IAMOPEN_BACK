
const User = require('../Controllers/UserController');

const authenticateUser = async (req, res, next) => {
    
    let userType = req.type
    let userFound = false

    if(!req.email || !req.password || !req.type){
      return res.status(400).json({
        status: false,
        message : "Please send valid data to acces API."
      })
      
    }
    if (userType == "COMPANY") {
      // userFound = await Compan
      // add company model ahere
    }else {
      userFound = await User.getUserWithEmailAndPassword() 
    }
    
    
    userFound ? next() : res.status(401).json({
        status: false, message: "You are not authorized"
    })
      
    
  };

  

  module.exports = authenticateUser