const express = require('express')
const { getAllProductPrecaution, addProductPrecaution, getSinglePrecaution, getPrecautionForProduct } = require('../Controllers/ProductPrecaution')


const router = express.Router()

router.get("/", getAllProductPrecaution).post(addProductPrecaution)
router.get("/:id", getSinglePrecaution)
router.get("/:productId", getPrecautionForProduct)

module.exports = router