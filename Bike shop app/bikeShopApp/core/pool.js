//required modules
const util = require('util');
const mysql = require('mysql');

//connecting to the database
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: '********', 
    password: '********', 
    database: 'bikeshopdb'
});

//an error will be thrown if mysql is unable to connect
pool.getConnection((err, connection) => {
    if(err) 
        console.error("Something went wrong connecting to the database ...");
    
    if(connection)
        connection.release();
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;
