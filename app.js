const express = require('express');
const bodyParser = require('body-parser');
const  path = require('path');
const cors = require('cors');
const app = express();
require("dotenv").config();
app.use(cors());
require('./database/mongodb/connection');
const port = process.env.PORT || 3002;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// route index
const indexRouter = require('./routes/index');
const paymentRouter = require('./routes/payment');
app.use('/', indexRouter);
app.use('/payment', paymentRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})