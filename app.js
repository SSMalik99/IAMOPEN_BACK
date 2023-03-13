require('dotenv').config()

const express = require('express')
// import {initMongo} from './db'
const initMongo = require('./db')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());


const userRouter = require('./Routes/UserRoutes')
const companyRouter = require("./Routes/CompanyRoutes")
const productRouter = require("./Routes/ProductRoutes")
const productPrecautionRouter = require("./Routes/ProductPrecaution")
const tutorialRouts = require("./Routes/TutorialRoutes")

// Register routes for the user
app.use('/api/v1/users', userRouter);

// register routes for comapny
app.use("/api/v1/company", companyRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/product_precaution", productPrecautionRouter)
app.use("/api/v1/tutorial", tutorialRouts)

initMongo(process.env.MONGOURI)

app.get('/', (req, res) => {
    res.send("Welcom to IAMOPEN")
})


app.listen(port, () => {
    console.log(`App is working on the ${port}`)
})