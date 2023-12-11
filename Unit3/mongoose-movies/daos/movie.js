const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

/*
{
  "title": "SEI Movie",
  "releaseYear": 2023,
  "mpaaRating": "PG",
  "nowShowing": "on",
  "cast": "Simon Desmond"
}
*/

const movieSchema = new Schema({
    title: {
        type: String,
        // highlight-next-line
        required: true
      },
    releaseYear: {
        type: Number,
        required: true,
        // highlight-start
        default: function () {
          return new Date().getFullYear();
        },
        // highlight-end
      },
    mpaaRating: String, // movie rating: G, PG, R, M
    cast: [String],
    nowShowing: Boolean,
  }, {
    timestamps: true
  });
  
// Compile the schema into a model and export it
// highlight-next-line
module.exports = mongoose.model("Movie", movieSchema);
