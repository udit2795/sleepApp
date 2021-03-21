const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');


const routers = require('./routes/index');


const app = express();
const httpServer = http.createServer(app);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));


app.use('/', routers);

mongoose.connect("mongodb+srv://user:sleepapp@cluster0.55hqc.mongodb.net/user?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('connected to db');
}).on('error', (err) => {
    console.log("Error in connecting DB. Error::", err)
});

const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log(`listening on port ${port}`)
});

module.exports.app = app;

