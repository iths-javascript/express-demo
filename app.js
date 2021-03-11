const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use( express.static('public') )

app.set("view engine", "ejs")

app.get('/:message', (req,res) => { 
  res.render("index", {message: req.params.message})
})

app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})