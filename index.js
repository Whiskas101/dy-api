const express = require("express")
require('dotenv').config()
const cors = require("cors")

const userRoute = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json())


// Route mapping
app.use('/user', userRoute);




app.listen(process.env.API_PORT, ()=>{
    console.log(`App running on PORT: ${process.env.API_PORT}`)
})






