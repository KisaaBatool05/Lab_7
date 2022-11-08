const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, //give time date when schema is added 
  }
);
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
