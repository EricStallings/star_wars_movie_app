// Step 1: Require in Express  (from our node_modules)
const express = require('express');
// Step 2: Create a new instance of the app by setting a variable equal to the invocation of express
const app = express();

app.set('view engine', 'ejs');

const routes = require('./routes')

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/* Step 3: Specify routes for our app! 
    > A route can be thought of binding some functionality when a user REQUESTS a certain address in an application. 
*/

// ROUTES

// Home - the root route is '/', and the second parameter is an anon function.
// A server expects to get requests from the client, and once those requests are received, the server SENDS a response back. RES stands for the server's response. 

// app.get('/', (req, res)=>{
//     res.send("This is a server response on the home page.")
// })

// We could also send HTML as a response directly from the route: 
// app.get('/', (req, res)=>{
//     res.send("<h2>This is a server response on the home page</h2>")
// })

//using an EJS file, we could set the template and serve that file directly.
// > by passing in an object literal, we can pass the property (title) as a variable to the home.ejs file. 
// > when it renders, we should see "Star Wars Movies" in a <p> tag under the header! 

// app.get('/', (req, res)=>{
//     res.render('home', {
//         title: "Star Wars Movies"
//         // movies: ["The First Movie", "The Second Movie", "The Third Movie"]
//     });
// })

app.get('/', routes.home);

// app.get('/darth', function(req, res){
//     res.send("This is a server response on the darth page.")
// })

// movie_single
// > The [:episode_number?] line allows the function to dynamically change which response is sent back based on the input. i.e.- if we go to star_wars_episde/1, it would return that page. 

// app.get('/star_wars_episode/:episode_number?', function(req,res){
//     let episode_number = req.params.episode_number;
//     res.send("This is the page for episode " + episode_number);
// })

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// To handle requests to pages that do not exist, pass in the '*' symbol as the first parameter to an app.GET request. This will send a response to any routes that you do not have a handler for. [i.e. 404 not found]

// app.get('*', function(req, res){
//     res.send(`This is not the page you're looking for...`)
// })

app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);


/*
NOTES:
> The order of the routes matters! If you were to place your 404 route handler at the very top, then ALL requests would return a 404: Page Not Found status. 


*/