require('dotenv').config(); 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors =require('cors')
const connectDB=require('./db')


app.use(cors())
app.use(express.json());
connectDB()



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
