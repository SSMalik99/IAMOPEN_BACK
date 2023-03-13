
const Product = require("../Models/Product")


const getAllProduct = async (req, res) => {
    let products = await Product.find({})
    res.status(200).json(products)
}

const getSingleProduct = async (req, res) => {
    let productId = req.id
    if (!productId ){

    
        res.status(400).json({
            status: false,
            message: "please provide product Id"
        })
        return 
    }
    
    let products = await Product.find({_id:productId})
    res.status(200).json(products)
}

const getProductsForCompany = async (req, res) => {
    const companyId = req.companyId
    let products = await Product.find({comkpany:companyId})

    res.status(200).json({
        success: true,
        message: "Product List for the company.",
        data : products
    })
}




const addProduct = async (req, res) => {

    data = req.body

    if(!data.name){
        res.status(400).json({
            success: false,
            message: "Please Provide product name!"
        })
        return
    } 

    if(!data.description){
        res.status(400).json({
            success: false,
            message: "Please Provide product description!"
        })
        return
    } 
    if(!data.image){
        res.status(400).json({
            success: false,
            message: "Please Provide image!"
        })
        return
    } 

    if(!data.company){
        res.status(400).json({
            success: false,
            message: "Please Provide company Id!"
        })
        return
    } 

    
    let product = await Product.create(data)

    if(product) {
        res.status(201).json({
            success: true,
            message: "Product Created successfully.",
            data : product
        })
        return 
    }

    res.status(500).json({
        success: true,
        message: "There seems to be some error please try later.",
        data : {}
    })

}

const updateProduct = async (req, res) => {
    data = req.body;
// TODO -- > Update Product
    let product = await Product.findByIdAndUpdate(req.body.id, data);
}

module.exports = {
    getAllProduct,
    getSingleProduct,
    addProduct,
    getProductsForCompany
}
