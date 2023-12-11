var express = require('express');
var movieController = require('../controllers/movie')
var router = express.Router();

/* base path: /movie */ 
/* GET Movies. */
router.get('/show', movieController.getMovie); 

// GET /show/:title
// highlight-next-line
router.get("/show/:title", movieController.getTitle);

// get all the done todos or havent done todos
// router.get("/data/:done", toDoController.getID);



// POST /create
// highlight-next-line
router.post("/create", movieController.createMovie); // add this route

// router.delete("/data/:id", toDoController.deleteTodo);


/* GET todos users */ 
// router.get('/users', toDoController.user);


// router.get('/data/unique', toDoController.unique);
// router.get('/data/location', toDoController.index);


module.exports = router;