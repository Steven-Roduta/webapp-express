const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

//Routes
const movieRouter = require("./routers/movierouter")

const { PORT, FE_URL} = process.send;

//CORS - communicazione con il Front-End
app.use(
    cors({
        origin: "*",
    }
))
//Middlewares per fil statici
app.use(express.static('public'))
//Parsing del body
app.use(express.json())
//Routes - rotte per le mie applicazioni
app.use("/movies",movieRouter );

//Middlewares - Gestioni Errori



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})