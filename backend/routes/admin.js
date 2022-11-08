const router = require('express').Router;
let Movie = require('../models/movie.js');
let MovieOrder = require('../models/order.js');

//adding movie

router.route('/add').post((req, res) => {
  //for now iska route is just localhost/3000/add

  //req means request, res means reponse
  //req jo user bhejay ga aapko, res is k how the app will respond to user

  //req.body string ma convert kar k send karta so islye we're typecasting into Numbers
  const id = Number(req.body.Id);
  const title = req.body.Title;
  const year = Number(req.body.year);
  const rating = Number(req.body.Rating);
  const genre = req.body.genre;
  const newMovie = new Movie({
    //movie object and sab ismay save kardya jo hamay user sa mila

    id,
    title,
    year,
    rating,
    genre,
  });

  newMovie
    .save() //saving in database
    .then(() => res.json('Movie added!'))
    .catch((err) => res.status(400).json('Error: ' + err)); //if any error, then convert in json and show that error

  //db k har option ko surround karna hota w then catch
  // eg how we used to do filehandling with try catch
});

//editing a movie

router.route('/update/:id').post((req, res) => {
  //route will be localhost/3000/update/123 - 123 is eg id

  //db function findbyid so then catch block
  Movie.findById(req.paramas.Id) //req.params.id means k jo request hai usmay sa id ka parameter ley ayen
    .then((movie) => {
      //update all info
      movie.id = Number(req.body.Id);
      movie.title = req.body.Title;
      movie.year = Number(req.body.year);
      movie.date = Date.parse(req.body.date);
      movie.rating = Number(req.body.rating);
      movie.genre = req.body.genre;

      movie
        .save() //save db function so surround with then catch
        .then(() => res.json('Movie updated'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })

    .catch((err) => res.status(400).json('Error: ' + err));
});
