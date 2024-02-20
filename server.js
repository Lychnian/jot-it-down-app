const express = require('express');
const path = require('path');

// Importing route modules for HTML and API routes
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')

// Helper method for generating unique ids
const uuid = require('./helpers/uuid.js');

// Setting up the port for the application
const PORT = process.env.PORT || 3001;

// Initializing Express application
const app = express();

// Middleware setup
// express.urlencoded and express.json are used to parse incoming requests with JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Using imported routes from route modules
app.use(html_routes)
app.use(api_routes)

// Additional static file serving, ensuring all paths in 'public' are covered
app.use(express.static(__dirname + '/public'))

// GET Route for the notes page
// This route serves the notes.html page for the /feedback endpoint
app.get('/feedback', (req, res) =>{
    try {
    // handling the /feedback route
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  } catch (err) {
    next(err); // Passes any encountered error to the error handler
  }
});

// GET Route for the homepage
// Serves the index.html page for the root endpoint
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Error handling middleware
// This will handle any errors that occur in the app
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

// Starting the Express server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});