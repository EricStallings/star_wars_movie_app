
// In this file, Ryan has put all of our route handlers from APP.JS
// > we are exporting them from here to keep the app.js file CLEAN. 
// > I have specifically left a function using ES5 syntax (notFound) to show the different ways to declare the functions. 



var moviesJSON = require('../movies.json');

exports.home = (req, res) => {
    const movies = moviesJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies: movies,
  
    });
}

exports.movie_single = (req, res) => {

    let episode_number = req.params.episode_number;

    const movies = moviesJSON.movies;

    if (episode_number >= 1 && episode_number <= 6){

    let movie = movies[episode_number - 1];
    let title = movie.title;
    let main_characters = movie.main_characters;

    res.render('movie_single', {
        movies: movies,
        title: title,
        movie: movie,
        main_characters: main_characters
    });
} else {
    res.render('notFound', {
        movies : movies,
        title: "This is not the page you're looking for..",

    })
}
}


exports.notFound = function(req, res){

    const movies = moviesJSON.movies;
    // let movie = movies[episode_number - 1];
    // let title = movie.title;

    res.render('notFound', {
        movies: movies,
        title: "This is not the page you're looking for.."
    });
};


