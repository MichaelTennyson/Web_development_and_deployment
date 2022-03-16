const pool = require('./pool');
const bcrypt = require('bcrypt');


function User() {};

User.prototype = {
    // Find the user data by id or username.
    find : function(user = null, callback)
    {
        // if the user variable is defind
        if(user) {
            var field = Number.isInteger(user) ? 'id' : 'username';
        }
        // SQL Query:
        let sql = `SELECT * FROM users WHERE ${field} = ?`;


        pool.query(sql, user, function(err, result) {
            if(err) throw err

            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },

    // Inserting new users into the database
    create : function(body, callback) 
    {

        var pwd = body.password;
        // Encrypting the password
        body.password = bcrypt.hashSync(pwd,10);

        var bind = [];
        // loop in the attributes of the object and push the values into the bind array.
        for(prop in body){
            bind.push(body[prop]);
        }
        // SQL Query to instert data into the users table
        let sql = `INSERT INTO users(username, fullname, password) VALUES (?, ?, ?)`;

        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            callback(result.insertId);
        });
    },

    //login process
    login : function(username, password, callback)
    {
        // Locatin a username
        this.find(username, function(user) {
            if(user) {
                // Checking password to see if theres a match.
                if(bcrypt.compareSync(password, user.password)) {

                    callback(user);
                    return;
                }  
            }
            // Null is returned if details incorrect.
            callback(null);
        });
        
    }

}

module.exports = User;