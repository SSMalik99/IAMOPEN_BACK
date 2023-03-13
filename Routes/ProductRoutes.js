const express = require('express')
const { getAllProduct, addProduct, getSingleProduct } = require('../Controllers/ProductController')

const router = express.Router()

router.get("/", getAllProduct).post(addProduct)
router.get("/:id", getSingleProduct)

module.exports = router