const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "online-store",
    password: "it25022007",
});

module.exports = pool.promise();