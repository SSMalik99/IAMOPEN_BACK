
const Company = require("../Models/Company")


const getAllCompanies = async (req, res) => {
    let companies = await Company.find({})
    res.status(200).json(companies)
}

const getCompanyWithEmail = async (email) => {

    return await Company.find({email: email})
}

const getSingleCompany = async (req, res) => {
    let companyId = req.id
    if (!companyId ){

    
        res.status(400).json({
            status: false,
            message: "please provide company Id"
        })
        return 
    }
    
    let companies = await Company.find({})
    res.status(200).json(companies)
}


const companyLogin = async (req, res) => {
    let email = req.email;
    let password = req.password
    if(!email || !password){
        res.status(400).json({
            status:true,
            message: "Email and password is required to login"
        })
    }
    let company = await Company.find({email:req.email, password:req.password})
    
    if(!company) {
        res.status(404).json({
            success: false,
            message: "Invalid Credentials!"
        })
        return 
    }
    res.status(200).json(company)
}

const registerCompany = async (req, res) => {
    data = req.body
    if(!data.email){
        res.status(400).json({
            success: false,
            message: "Please Provide Email!"
        })
        return
    } 

    if(!data.name){
        res.status(400).json({
            success: false,
            message: "Please Provide Name!"
        })
        return
    } 
    if(!data.email){
        res.status(400).json({
            success: false,
            message: "Please Provide Email!"
        })
        return
    } 

    if(!data.password){
        res.status(400).json({
            success: false,
            message: "Please Provide password!"
        })
        return
    } 

    let company = getCompanyWithEmail(data.email)
    
    // company already registered
    if(company){
        res.status(400).json({
            success: true,
            message: "Company with this email already registered.",
            data : {}
        })
    }
    company = await Company.create(data)

    if(company) {
        res.status(201).json({
            success: true,
            message: "Company registed successfully.",
            data : company
        })
        return 
    }

    res.status(500).json({
        success: true,
        message: "There seems to be some error please try later.",
        data : {}
    })

}

const updateCompany = async (req, res) => {
    data = req.body;
// TODO -- > Update company
    let company = await Company.findByIdAndUpdate(req.body.id, data);
}

module.exports = {
    registerCompany,
    companyLogin,
    getSingleCompany,
    getCompanyWithEmail,
    getAllCompanies
}
