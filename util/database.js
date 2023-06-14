const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-store', /* root - username */'root', /* password */'it25022007', {dialect: "mysql", host: "localhost"}); 

module.exports = sequelize;

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     database: "online-store",
//     password: "it25022007",
// });

// module.exports = pool.promise();