const mysql = require ("mysql2")

const connection = mysql.createconnection({
    host:"localhost",
    database:"db_movies"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected to mysql2!")
})

module.exports = connection;