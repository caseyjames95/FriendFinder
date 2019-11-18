// calling Node Packages
const express = require('express')
const { join } = require('path')
// start express server
const app = express()

// middelware
app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
    res.render('public')
})

// port
app.listen(3000)