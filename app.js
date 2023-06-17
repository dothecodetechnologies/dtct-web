const express = require('express')
const  path = require('path')
const app = express()
const port = 3001;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
// route index
const indexRouter = require('./routes/index')
const pageRouter = require('./routes/pages')
const paymentRouter = require('./routes/payment')
app.use('/', indexRouter);
app.use('/page', pageRouter);
app.use('/payment', paymentRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})