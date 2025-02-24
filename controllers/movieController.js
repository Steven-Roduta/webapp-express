//Recupero connessione del  DB
const connection = require("../data/database")

//index
const index = (res, req) => {
    const sql = "SELECT * FROM db_movies.movies";

    //avvio la query
    connection.execute(sql, (err, results) => {
        if (err) return res.status(500)
            .json({
            error:"query error",
            message:`database query error: ${sql}`
        })
        res.json(results);
    })
};

//show
const show = (res, req) => {}

module.exports = {
    index,
    show
}