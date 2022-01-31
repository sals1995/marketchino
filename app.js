var express = require("express")
var app = express()
const path =require("path")
// const cors = require("cors");
require("./db")

const productsRouter = require('./routes/products')

app.use(express.json()) 
// app.use(cors());
app.use('/pictures', express.static(path.join(__dirname, 'pictures')));

//localhost:8000/ or localhost:8000/api or localhost:8000/products or localhost:8000/api/products
app.use(["/","/api/products"], productsRouter)

/* app.use('*', (req, res) => {
    res.status(505).json({
      success: 'false',
      message: 'Page not found',
      error: {
        statusCode: 404,
        message: 'You reached a route that is not defined on this server',
      },
    });
  }); */
app.listen(8000, () => { console.log("listening on " + 8000); })
