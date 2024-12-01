const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const mongoose = require('mongoose');
// const seedDB = require('./seed');
const quotesRoute=require('./apis/quotesRoutes')
const cors=require('cors');

require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connection Open!'))
    .catch((error) => console.log(error));



// seed the database with the dummy quotes
// seedDB();

app.use(express.json());

app.use(cors());

 
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from Quotes App server' });
})


app.use(quotesRoute);




app.listen(port, () => {
    console.log(`Server started:${port}`)
})



module.exports = app;
