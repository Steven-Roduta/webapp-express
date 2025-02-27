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


//show
const show = (req, res) => {
    // console.log("show");
    // console.log(req.req.params);

    const { id } = req.params;

    // console.log(id);

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

    // console.log(movie);

    res.json(movie); 

});
}

module.exports = {
    index,
    show
}