const express = require('express')
const { getAllCompanies, registerCompany, getSingleCompany } = require('../Controllers/CompanyController')
const router = express.Router()

router.get("/", getAllCompanies).post(registerCompany)
router.get("/:id", getSingleCompany)

module.exports = router