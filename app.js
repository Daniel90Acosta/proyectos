require('dotenv').config()
//const { log } = require('console')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const cookieParser = require ('cookie-parser')
const morgan = require ('morgan')
const axios = require('axios')


const userRouter = require('./controllers/users.js');
const productoRouter = require('./controllers/productos.js')


async function conectarBD() {
    try {
      await mongoose.connect(process.env.TOKEN)
      console.log('Se conectó a MongoDB');
    } catch (error) {
      console.log(error);
    }
  }
  
conectarBD();

//rutas de frontend
app.use('/',express.static(path.resolve('views','home')))
app.use('/components',express.static(path.resolve('views','components')))
app.use('/registro',express.static(path.resolve('views','registro')))
app.use('/login',express.static(path.resolve('views','login')))
app.use('/admin',express.static(path.resolve('views','adminP')))
app.use('/nuevo',express.static(path.resolve('views','nuevoP')))
app.use('/editar',express.static(path.resolve('views','editarP')))
app.use('/images',express.static(path.resolve('img')))
//rutas de apartados frontend
app.use('/apartado-1',express.static(path.resolve('views','apartado-1')))

//importante
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('tiny'))

//rutas de backend
app.use('/api/users',userRouter)
app.use('/api/productos',productoRouter)




module.exports = app