import express from 'express';
import mongoose from 'mongoose'
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js'

const app = express();

//Routes
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)


app.use((err, req, res, next) => {
  res.status(500).send({ message : err.message})
})

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });

//Connect to database
mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://moussa:moussa@amazonadb.ue35q.mongodb.net/amazonaDb?retryWrites=true&w=majority', {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useCreateIndex : true
}, () => {
  console.log('Connexion a la database')
})

