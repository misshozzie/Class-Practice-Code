var express = require('express');
var movieController = require('../controllers/movie')
var router = express.Router();

/* base path: /movie */ 
/* GET Movies. */
router.get('/show', movieController.getMovie); 

// GET /show/:title
// highlight-next-line
router.get("/show/:title", movieController.getTitle);

// GET /show/nowshowing
// get all the movies that are now showing
router.get("/show/nowShowing", movieController.getNowShowing);



// POST /create
// highlight-next-line
router.post("/create", movieController.createMovie); // add this route

module.exports = router;