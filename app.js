const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use( express.static('public') )
app.use( express.urlencoded() )

app.set("view engine", "ejs")


const albums = [
  {title: "Grillkorv", artist: "Svenne", numTracks: 4},
  {title: "Bananpaj", artist: "Olof", numTracks: 40},
]



app.get('/', (req,res) => {
  res.render("index")
})

app.get('/albums', (req,res) => {
  res.render("albums", {albums})
})

app.get('/:message', (req,res) => {
  if(req.params.message == "grillkorv"){
    res.render("secret")
  }else{
    res.render("index", {message: req.params.message})
  }
})

app.post('/albums', (req,res) => {
  albums.push(req.body)
  res.redirect('/albums')
})



app.listen(PORT, function(){
  console.log(`Server started on port ${PORT}`)
})