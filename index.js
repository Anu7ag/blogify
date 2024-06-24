const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')
const userRoute = require('./routes/user')
const connectDB = require('./db/connectDB')
app.use(express.urlencoded({ extended: true }))



app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.get('/', (req, res) => {
    res.render('home')
})
app.use('/user', userRoute)

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server started http://localhost:${process.env.PORT}`)
        })
    }
    catch (error) {
        console.log(error)
    }
}
start()