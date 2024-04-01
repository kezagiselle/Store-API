require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const notFoundMiddle = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handle')

//middleware
app.use(express.json())

//routes
app.get('./', (req,res) =>{
  res.send('Store API')
})

//app.use('/store/products', productsRouter)
//products route

app.use(notFoundMiddle)
app.use(errorMiddleware)

const port = process.env.PORT || 4000

const connectDB = require('./db/connect')
const productsRouter = require('./routes/product')

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/STORE-API')
        app.listen(port, console.log(`Server is listening port ${port}....`))
    } catch (error){
        console.log(error);
    }
}
start()