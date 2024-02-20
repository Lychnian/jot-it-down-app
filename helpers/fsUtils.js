const fs = require('fs');
const util = require('util');

// Converts fs.readFile into a Promise-based function using util.promisify
// This allows for better handling of asynchronous file reading operations.
const readFromFile = util.promisify(fs.readFile);

/**
 * Function to read data from a file and append new content.
 *  @param {string} destination - The file path where you want to write data.
 *  @param {object} content - The content to be written to the file.
 *  @returns {void} - This function doesn't return anything. It performs a side-effect (writing to a file).
 */

const writeToFile = (destination, content) => {
  // fs.writeFile is used to write data to a file.
  // JSON.stringify converts 'content' into a JSON string with a 4-space indentation for readability.
  // A callback function is used to handle any errors or log a success message.
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
};

/**
 *  Function to read data from a file and append new content
 *  @param {object} content - The content to append to the file.
 *  @param {string} file - The path to the file you want to modify.
 *  @returns {void} - This function doesn't return anything. It modifies the file content.
 */
const readAndAppend = (content, file) => {
  // fs.readFile is used to read the file content.
  // 'utf8' encoding is specified for reading the content as a string.
  // A callback function is used to handle the data read from the file or an error.
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };