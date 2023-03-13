const express = require('express')
const { getAllTutorials, addProductTutorial, getSingleTutorial, getTutorialForProduct } = require('../Controllers/TutorialController')


const router = express.Router()

router.get("/", getAllTutorials).post(addProductTutorial)
router.get("/:id", getSingleTutorial)
router.get("/:productId", getTutorialForProduct)

module.exports = router