const express = require('express')
const { getAllProduct, addProduct, getSingleProduct, getProductsForCompany } = require('../Controllers/ProductController')

const router = express.Router()

router.get("/", getAllProduct).post(addProduct)
router.get("/:id", getSingleProduct)
router.get("/:companyId", getProductsForCompany)

module.exports = router