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
const show = (res, req) => {
    const { id } = req.params;

    const sql = `SELECT *
    FROM db_movies.movies
    WHERE id = ?`

    connection.execute(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "query error",
                message: `Database query error: ${sql}`,
            });
        }

        // Retrieve the movie from the results
        const movie = results[0];

    if(!movie) {
        return res.status(404).json({
            error: "not found",
            message: "movie not found"
        })
    }
    res.json(movie); 

});
}

module.exports = {
    index,
    show
}