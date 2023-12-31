const daoMovies = require("../daos/movie")

module.exports = {
    getAll,
    createMovie,
    getOne
  };

  async function getAll(query) {
    var findQuery = {}
    var queryFields = ["title", "mpaaRating", "_id", "nowShowing", "releaseYear"]
    for (field of queryFields) {
        console.log(field)
        if (query.hasOwnProperty(field)) {
            findQuery[field] = query[field]
        }
    }
    console.log(findQuery)

    var casts = []
    if (query.hasOwnProperty("cast")) {
        casts = query["cast"].split(",")
    }
    console.log(casts)
    var movies
    if (casts.length > 0) {
        movies = await daoMovies.find(findQuery).where("cast").in(casts)
    } else {
        movies = await daoMovies.find(findQuery)
    }
    return movies;
  }
  
  function createMovie(movie) {
    //
    return daoMovies.create(movie);
  }

  async function getOne(param) {
    const movie = await daoMovies.findOne({title: param})
    if (movie == null || Object.keys(movie).length == 0) {
        return "no movie with such title"
    } else {
        return movie
    }
  }