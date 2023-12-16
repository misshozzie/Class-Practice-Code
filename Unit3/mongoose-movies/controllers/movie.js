const modelMovies = require("../models/movie");

// highlight-start
module.exports = {
    index,
    show,
    newMovie,
    createMovie,
    getNowShowing,
}

    function index(req, res) {
      Movie.find({}, function(err, movies) {
        res.render('movies/index', { title: 'All Movies', movies });
      });
    }

    function show(req, res) {
      Movie.findById(req.params.id)
      .populate('cast')
      .exec(function(err, movie) {
        console.log(movie)
        Performer.find({
          _id: {$nin: movie.cast}
        }, function(err, performers) {
          res.render('movies/show', {
            title: 'Movie Detail',
            movie,
            performers
          });
        });
      });
    }

    function newMovie(req, res) {
      res.render('movies/new', { title: 'Add Movie' });
    }

    function createMovie(req, res) {
      // convert nowShowing's checkbox of nothing or "on" to boolean
      req.body.nowShowing = !!req.body.nowShowing;
      for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      var movie = new Movie(req.body);
      movie.save(function(err) {
        if (err) return res.redirect('/movies/new');
        console.log(movie);
        res.redirect(`/movies/${movie._id}`);
      });
    }

    // async function getNowShowing(req, res) {
    //   const modelData = await modelMovies.getNowShowing()
    //   res.json(modelData);
    // }
    function getNowShowing(req, res) {
      modelMovies.getNowShowing((error, modelData) => {
        if (error) {
          // Handle the error here, like sending a response with a 500 status code.
          res.status(500).send(error.message);
        } else {
          res.json(modelData);
        }
      });
    }