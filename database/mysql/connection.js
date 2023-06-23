
var mysql = require('mysql');
let CONFIG_DATA = require('../config')
var pool = mysql.createPool({
    connectionLimit: 1000,
    connectTimeout: 60 * 60 * 1000,
    acquireTimeout: 60 * 60 * 1000,
    timeout: 60 * 60 * 1000,
    host: CONFIG_DATA.HOST,
    user: CONFIG_DATA.DB_USER,
    password: CONFIG_DATA.DB_PASSWORD,
    database: CONFIG_DATA.DB,
});

pool.getConnection(function (err, connection) {

    if (err) {
        console.log(err);
    }
    else {
        console.log('Connected');
    }
})