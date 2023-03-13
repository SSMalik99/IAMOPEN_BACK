
const Tutorial = require("../Models/Tutorial")


const getAllTutorials = async (req, res) => {
    let tutorials = await Tutorial.find({})
    
    res.status(200).json({
        success: true,
        message: "Tutorial List ",
        data : tutorials
    })
}

const getSingleTutorial = async (req, res) => {
    let tutorialId = req.id

    if (!tutorialId ){

    
        res.status(400).json({
            status: false,
            message: "please provide tutorial Id"
        })
        return 
    }
    
    let tutorial = await Tutorial.find({_id:tutorialId})
    res.status(200).json({
        status: true,
        message: "Tutorial",
        data : tutorial
    })
}

const getTutorialForProduct = async (req, res) => {
    const productId = req.prductId
    let tutorials = await Tutorial.find({product:productId})

    res.status(200).json({
        success: true,
        message: "Tutorial List for the product.",
        data : tutorials
    })
}

const addProductTutorial = async (req, res) => {

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
    if(!data.image){
        res.status(400).json({
            success: false,
            message: "Please Provide link!"
        })
        return
    } 
    if(!data.isVideo){
        res.status(400).json({
            success: false,
            message: "Please Provide link type(video or audio)!"
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

   

    
    let tutorial = await Tutorial.create(data)

    if(tutorial) {
        res.status(201).json({
            success: true,
            message: "Product Tutorial addedd successfully.",
            data : tutorial
        })
        return 
    }

    res.status(500).json({
        success: true,
        message: "There seems to be some error please try later.",
        data : {}
    })

}

const updateProductTutorial = async (req, res) => {
    data = req.body;
// TODO -- > Update Product
    let productPrecaution = await Tutorial.findByIdAndUpdate(req.body.id, data);
}

module.exports = {
    getAllTutorials,
    getSingleTutorial,
    getTutorialForProduct,
    addProductTutorial
}
