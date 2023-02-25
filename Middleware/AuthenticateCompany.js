
const Company = require('../Controllers/CompanyController');

const authenticateUser = async (req, res, next) => {
    
    let companyFound = null

    if(!req.header.token){
      return res.status(400).json({
        status: false,
        message : "Please send valid data to acces API."
      })
      
    }
    
    companyFound = await Company.getUserWithEmailAndPassword(req.header.token) 
    
    companyFound ? next() : res.status(401).json({
        status: false, message: "You are not authorized"
    })
      
    
  };

  

  module.exports = authenticateUser