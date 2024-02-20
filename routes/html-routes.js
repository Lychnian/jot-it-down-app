// Importing necessary modules
const htmlRoute = require('express').Router();
const path = require('path');

// GET Route for retrieving the home page
// This route serves the main landing page (index.html) of the application.
htmlRoute.get('/', (req, res) => {
    // The res.sendFile method is used to send the file at the specified path to the client.
    // path.join is used to create a path to the index.html file in the public directory.
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// GET Route for retrieving the notes page
// This route serves the note-taking page (notes.html) of the application.
htmlRoute.get('/notes', (req, res) => {
     // Similar to the above, this sends the notes.html file to the client when the '/notes' endpoint is accessed.
    res.sendFile(path.join(__dirname, '../public/notes.html'))
  });

// Exporting the router
// This makes the htmlRoute available for import in other files, like server.js.
module.exports = htmlRoute;