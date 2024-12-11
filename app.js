const express = require('express')
// console.log(express)
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDb = require('./database/connectDb')

//view ejs set
app.set ('view engine', 'ejs')

// css image js link public 
app.use (express.static('public'))

//connect db
connectDb()
//parse application
app.use (express.urlencoded({extended: false}))




// route load
app.use('/', web)
//server create
app.listen(port, () => {
    console.log('server start localhost:3000')

})