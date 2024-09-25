require('dotenv').config(); 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors =require('cors')
const connectDB=require('./Database Connection/db.js')
const route= require("./Routes/userRoutes.js");
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();
app.use("/user",route);



app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
