const mongoose = require('mongoose');
let db_user ='dtct_db';
let db_pass = 'miTmboeLe958DG4k';
let URL = `mongodb+srv://${db_user}:${db_pass}@atlascluster.i5e5hjj.mongodb.net/dtct?retryWrites=true&w=majority`;
mongoose.connect(URL,{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(() => console.log('Connected!'));