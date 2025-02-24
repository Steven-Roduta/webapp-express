const express = require('express')
const app = express()
const port = process.env.PORT;

//Routes
const moevieRouter = require("./routers/movierouter")

//CORS - communicazione con il Front-End
//Middlewares Globali
//Routes - rotte per le mie applicazioni
//Middlewares - Gestioni Errori



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})