const modelUsers = require("../models/users")

module.exports = {
    getUsers,
    createUser
}

async function getUsers(req, res) {
    try {
        const userData = await modelUsers.getUsers(req.query);
        res.json({users: userData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createUser(req, res) {
    try {
      const userData = await modelUsers.createUser(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/users'); //SKIP old code
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      // res.render('movies/new', { errorMsg: err.message }); SKIP old code
      res.status(500).json({ errorMsg: err.message });
    }
  }