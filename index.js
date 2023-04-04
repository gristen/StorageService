const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/Router.js')
const PORT = process.env.PORT||5000

const app = express()

app.set('view engine','ejs')
app.use(express.static('public'));

app.use(express.json()) // дает приложению парсить JSON
app.use(router)



const start = async() =>
{
    try{
        await mongoose.connect('mongodb+srv://dimagordienkog:123@cluster0.krqptta.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT,()=>console.log(`server started on port ${PORT}`) ) // start server
    }catch{
        console.log(e)
    }
}
start()

