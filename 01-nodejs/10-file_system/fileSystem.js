// importing file system module
const fs = require('fs');

// TO READ FILE use readFile(file_path, "char format", (error, data)=>{// code to read data here})  
fs.readFile(__dirname+"/read.txt", "utf-8", (error, data)=>{
    // check if there is any error
    if(error) throw error;

    console.log(data);
});


// The File System module has methods for creating new files:

// fs.appendFile(file_path, content, callback) : method appends specified content to a file. If the file does not exist, the file will be created
fs.appendFile(__dirname+'/newFile.txt', 'Hello this file is created using node', (err)=>{
    if (err) throw err;
    console.log("Saved!");
});
// fs.open() : method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
fs.open(__dirname+'/newFile2.txt', 'w', (err, file)=>{
    if(err) throw err;

    console.log('Saved!');
});

// fs.writeFile() : method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile(__dirname+'/newFile3.txt', "Hello Content", (err)=>{if(err) throw err});

// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()


// TO DELETE FILE use unlink(file_path, (err, data)=>{});

// fs.unlink(__dirname+"/hello.txt", (err, data)=>{
//     if(err) throw err;

//     console.log("file deleted succesfully"+data);
// })


// To rename a file with the File System module,  use the fs.rename() method.
// The fs.rename() method renames the specified file:

// fs.rename(__dirname+'/newFile3.txt', __dirname+'/renamed.txt', (err)=>{if(err) throw err;});


// USE SYNCRONOUS METHODS TO FILE SYSYTEM 
try{

    const data = fs.readFileSync(__dirname+'/read.txt', 'utf-8');
    console.log(data);

}catch(e){
    console.log(e);
}