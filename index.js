const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')

dotenv.config()

const app = express()

app.use(cors({origin:"*"}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongodb connected."))
  .catch((error) => console.log(error))
  
app.use("/auth", authRoutes)

const PORT = process.env.PORT || 5001

app.listen(PORT,() => {
  console.log(`Server is Running on Port ${PORT}`)
})