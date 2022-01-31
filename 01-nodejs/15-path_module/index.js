// import path module
const path = require('path')

// basename() gives last portion of the path
console.log(path.basename('D:/ARYAN/COURSES/MERN/01-nodejs/15-path_module/index.js'));
// console.log(path.basename(__filename));
// console.log(path.basename(__filename, '.js'));

// __filename returns full path of the current file
console.log(__filename)

// dirname() return the directories path of the file
console.log(path.dirname(__filename));

// extname() to get the extension of the file 
console.log(path.extname(__filename));

// join() is used to join the path
console.log(path.join('/course', 'paid', 'JAVA/OOPs'));

// normalize() is used to normalised url
console.log(path.normalize('C:\\temp\\\\foo\\bar'));

// parse() gives detailed object of files path directories
console.log(path.parse(__filename));
console.log(path.parse(__filename).dir);