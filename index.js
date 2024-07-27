require('dotenv').config()
require('./DB/db')
const route = require('./Routes/route')
const express = require('express')
const cors=require('cors')
const app =express()
app.use(cors())
app.use(express.json())
app.use(route)

const PORT=process.env.PORT || 4000



app.listen(PORT,()=>{
    console.log(`Server started and listening in the port ${PORT}`)
})