require('dotenv').config()

const express = require('express')
// import {initMongo} from './db'
const initMongo = require('./db')

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());


const userRouter = require('./Routes/UserRoutes')

app.use('/api/v1/users', userRouter);

// app.use('/api/v1/products', productRouter);

initMongo(process.env.MONGOURI)

app.get('/', (req, res) => {
    res.send("Welcom to IAMOPEN")
})


app.listen(port, () => {
    console.log(`App is working on the ${port}`)
})