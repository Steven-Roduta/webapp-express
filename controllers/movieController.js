// DB connection
const connection = require("../data/database");

// Index: Retrieve all movies
const index = (req, res) => {  
    const sql = "SELECT * FROM db_movies.movies";

    // Execute the query
    connection.execute(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "query error",
                message: `Database query error: ${sql}`,
            });
        }
        res.json(results); 
    });
};

module.exports = {
    index
};

//show
const show = (req, res) => {}

module.exports = {
    index,
    show
}