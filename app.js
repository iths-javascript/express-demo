const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs")



app.get('/', (req,res) => {
  // res.send("<h1>Hello World!</h1>")
  res.render("index", {message:'Hello!'})
})

app.get('/about', (req,res) => {
  res.render("about")
})


app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})