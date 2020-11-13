const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config({
    path: './config.env'

});
//Routes
app.get('/', (req, res) => {
    res.send('Hellow');
});
app.get('/home', (req, res) => {
    res.send('home');
});
app.get('/category', (req, res) => {
    res.send('Category');
});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection successfull!'));


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Lisitnig on port ${PORT}`);
});