var mysql = require('mysql');

function getDatabaseConnection() {
    return mysql.createConnection({
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE
    });
};

function getTasks() {
    const connection = getDatabaseConnection();
    return new Promise(function (resolve, reject) {
        connection.query("SELECT * FROM Tasks", function (error, results) {
            if (error) {
                console.log(error);
                connection.destroy();
                return reject(error);
            } else {
                connection.end();
                return resolve(results);
            }
        })
    })
}

module.exports = {
    getTasks
}
