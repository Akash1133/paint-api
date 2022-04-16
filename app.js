const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const auth = require('./routes/auth')

const app = express();
dotenv.config();
app.use(express.json());


app.use('/api/auth', auth);


mongoose.connect(process.env.MONGO_URL)
    .then(() =>
        console.log('database connected')).catch((err) => {
        console.log(err);
    })



app.listen(5000, () => {
    console.log('server is running on port 5000');
})