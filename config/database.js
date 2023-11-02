const mysql = require('mysql');

const koneksi = mysql.createConnection({
    host: 'localhost', // host database
    user: 'root', // user database
    password: 'root', // password database
    database: 'smpi', // nama database
    port: 3306 // port default mysql
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;