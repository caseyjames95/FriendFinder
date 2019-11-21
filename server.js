// calling Node Packages
const express = require('express')
const { join } = require('path')
// start express server
const app = express()

// middelware
app.use(express.static(join(__dirname, 'app', 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// port
app.listen(3000)