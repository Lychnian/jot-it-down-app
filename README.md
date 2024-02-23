# JOT IT DOWN APP
 "Jot It Down" is an intuitive, Express.js-based note-taking app, perfect for organizing tasks and thoughts with ease. Its streamlined interface allows for easy writing, saving, and managing of notes, enhancing productivity for small business owners and individuals.

## Badges
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  
## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Routes/API Endpoints](#routes/api-endpoints)
* [Screenshots](#screenshots)
* [How to Contribute](#how-to-contribute)
* [Questions?](#questions)
 
## License
This project is licensed under the MIT license.
[License Link](https://opensource.org/licenses/MIT)
  
## Description

Jot It Down" is a dynamic, user-friendly note-taking application designed to cater to the organizational needs of small business owners and individuals alike. Built with an Express.js back end, this app offers a seamless experience in writing, saving, and managing notes. When you launch "Jot It Down", you are greeted with a welcoming landing page that leads you to the notes section. Here, you can easily create new notes with titles and detailed descriptions, view them in a neatly organized left-hand column, and edit them on the right. Each note is assigned a unique ID, ensuring easy management. The app also includes features like a "Save Note" button for instant saving, a "Clear Form" button for starting fresh, and the ability to view and edit existing notes with a click. Deployed on Heroku for accessibility, "Jot It Down" offers a streamlined note-taking process, enabling you to keep track of tasks and organize your thoughts.

## Installation

1. Clone the starter code repository.
2. Install Node.js and npm (Node Package Manager).
3. Run npm install to install the necessary dependencies (Express.js).



## Usage

- Run the server using the command "node server.js".
- Access the application through your browser at http://localhost:3000.
- Use the interface to write, save, and manage your notes.
OR
The "Jot It Down" note-taking app is live and accessible for use! Experience its full functionality by visiting the deployed application on Heroku:
https://jot-it-down-notes-ae5fda746450.herokuapp.com
This link will take you directly to the app, where you can start creating and managing your notes right away.



## Routes/API Endpoints

1. GET /notes: This route serves the actual note-taking page (notes.html) of the application where users can write and view their notes.

2. GET *: This is a catch-all route that usually directs users to the main entry point of the application, typically the home page or landing page (index.html).

3. GET /api/notes: This API route is used to retrieve all the saved notes from the server, which are stored in a JSON file (db.json). It's a crucial part of the app's functionality, enabling the front end to display existing notes.

4. POST /api/notes: This route handles the creation of new notes. When a user adds a new note, this route saves it to the JSON file and ensures it's available for retrieval later.

5. DELETE /api/notes/:id (Bonus feature): If implemented, this route would allow for the deletion of a note based on its unique ID, enhancing the app's functionality.



## Screenshots


![JotItDown1](https://github.com/Lychnian/jot-it-down-app/assets/140586279/66c62dfc-213c-4c84-a10c-1f9a317b3749)



![JotItDown2](https://github.com/Lychnian/jot-it-down-app/assets/140586279/5d0d8bfa-8119-4d19-a4cf-6a5db0d1344e)



![JotItDown3](https://github.com/Lychnian/jot-it-down-app/assets/140586279/98686022-ac30-46f6-b04d-3227abcc269b)


  
## How to Contribute
[Contributor Covenant](https://www.contributor-covenant.org/)  
    
    
  
## Questions?
### Reach Me Here: 
[Lychnian](https://github.com/Lychnian)
