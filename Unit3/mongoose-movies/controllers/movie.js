const modelMovies = require("../models/movie")

// highlight-start
module.exports = {
    getMovie,
    getTitle,
    createMovie,
    // deleteTodo,
    // getIDDone
};
// highlight-end

async function getMovie(req, res) {
    // sending out my response
    res.json({
      movies: await modelMovies.getAll(req.query),
    });
    // next();  error handling/redirect to another endpoint/auditing log purpose
  }

function getFirst(req, res, next) {
    res.json({
        todos: modelTodos.getFirst(),
        time: res.locals.time,
      });
    next();

}

async function getTitle(req, res) {
    const modelData = await modelMovies.getOne(req.params.title)
    if (modelData == "no movie with such title") {
        res.status(404).json("no movie with such title")
    } else {
        res.json(
            modelData
        );
    }
    // do some other function Audit logging 
    // next();
  }

function getIDDone(req, res) {
    console.log(req.params)
    console.log(req.query)
    modelData = modelTodos.getOne(req.params.id)
    if (modelData == "no todo found") {
        res.json("no data found")
    } else {
        res.json({
            // id = 1 modelTodos.getOne(1)
          todo: data,
          time: res.locals.time,
        });
    }
    // do some other function Audit logging 
    // next();
  }

async function createMovie(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
//   req.body.nowShowing = !!req.body.nowShowing;
  // check the type of nowShowing, must be Boolean
  // if not boolean, return error to user


  // remove any whitespace at start and end of cast
//   req.body.cast = req.body.cast.trim();
  // should not do trim, but should take in an array of strings

  // split cast into an array if it's not an empty string - using a regular expression as a separator
//   if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
  try {
    const movie = await modelMovies.createMovie(req.body);
    // Always redirect after CUDing data
    // We'll refactor to redirect to the movies index after we implement it
    // res.redirect('/movies/new'); SKIP old code
    res.status(201).json(movie);
  } catch (err) {
    // Typically some sort of validation error
    console.log(err);
    // res.render('movies/new', { errorMsg: err.message }); SKIP old code
    res.status(500).json({ errorMsg: err.message });
  }
}

function deleteTodo(req, res) {
    modelTodos.deleteOne(req.params.id);
    // res.redirect('/todos');
    res.json("data has been deleted."); // send empty response back for DELETE
}
