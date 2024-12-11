const express = require('express')
const FrontController = require('../controllar/FrontController')
const routes = express.Router()

//routes
routes.get('/home',FrontController.home)
routes.get('/about',FrontController.about)
routes.get('/contact',FrontController.contact)
routes.get('/',FrontController.login)
routes.get('/register',FrontController.register)
// insertdata
routes.post('/userinsert',FrontController.userinsert)


module.exports = routes