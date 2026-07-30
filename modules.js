// what is modules 
// Modules are reusable blocks of code that can be imported and exported between different files in a JavaScript application. They help in organizing code and promoting reusability.

// types of modules in  node.js
// 1. Core Modules: Built-in modules that come with Node.js (e.g., fs, path, os, http)
// 2. Local Modules: Custom modules created by the developer
// 3. Third-party Modules: Modules installed via npm (e.g., express, lodash)

// fs - file system module
// path - Works with file and directory paths
// http - Creates HTTP servers and clients
// os - Provides operating system-related utility methods and properties
// events - Provides event-driven programming capabilities

//fs 
const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

// fs.writeFile('example.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('File written successfully!');
// });


// fs.writeFileSync('example.txt', 'Hello, World! writefilesync'); // Synchronous file write

// local modules
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract }; // Exporting the functions to be used in other files

// third -party modules
// To use third-party modules, you need to install them using npm (Node Package Manager). For example, to install the 'lodash' library, you would run:
// npm install lodash

// const express = require('express');
// const add = express();


// benefit of modules
// - code reusability
// - better organization
// - easier maintenance
// - namespace management
// - improved collaboration


fs.unlink('dummy.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File deleted successfully!');
})