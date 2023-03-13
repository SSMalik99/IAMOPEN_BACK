
const ProductPrecaution = require("../Models/ProPrecaution")


const getAllProductPrecaution = async (req, res) => {
    let productPrecautions = await ProductPrecaution.find({})
    res.status(200).json(productPrecautions)
}

const getSinglePrecaution = async (req, res) => {
    let precautionId = req.id

    if (!precautionId ){

    
        res.status(400).json({
            status: false,
            message: "please provide product precaution Id"
        })
        return 
    }
    
    let productPrecaution = await ProductPrecaution.find({_id:precautionId})
    res.status(200).json(productPrecaution)
}

const getPrecautionForProduct = async (req, res) => {
    const productId = req.prductId
    let productPrecaution = await ProductPrecaution.find({product:productId})

    res.status(200).json({
        success: true,
        message: "Product List for the company.",
        data : productPrecaution
    })
}




const addProductPrecaution = async (req, res) => {

    data = req.body

    if(!data.title){
        res.status(400).json({
            success: false,
            message: "Please Provide title!"
        })
        return
    } 

    if(!data.description){
        res.status(400).json({
            success: false,
            message: "Please Provide description!"
        })
        return
    } 
    if(!data.product){
        res.status(400).json({
            success: false,
            message: "Please Provide productId!"
        })
        return
    } 

   

    
    let productPrecaution = await ProductPrecaution.create(data)

    if(productPrecaution) {
        res.status(201).json({
            success: true,
            message: "Product Precaution addedd successfully.",
            data : productPrecaution
        })
        return 
    }

    res.status(500).json({
        success: true,
        message: "There seems to be some error please try later.",
        data : {}
    })

}

const updateProductPrecaution = async (req, res) => {
    data = req.body;
// TODO -- > Update Product
    let productPrecaution = await ProductPrecaution.findByIdAndUpdate(req.body.id, data);
}

module.exports = {
    getAllProductPrecaution,
    getSinglePrecaution,
    getPrecautionForProduct,
    addProductPrecaution
}
