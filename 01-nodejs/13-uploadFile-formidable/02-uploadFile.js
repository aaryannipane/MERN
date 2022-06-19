// This code will produce an HTML form:

var http = require('http');
var fs = require('fs');

var formidable = require('formidable');

http.createServer((req, res)=>{

    // The file will be uploaded, and placed on a temporary folder:
    // STEP 2:
    if(req.url == '/fileupload'){
        var form =  new formidable.IncomingForm();
        form.parse(req, (err, fields, files)=>{

            // STEP 3:
            var oldPath = files.filetoupload.filepath;
            var newPath = 'C:/Users/sanjay/desktop/'+ files.filetoupload.originalFilename;
            fs.rename(oldPath, newPath, (err)=>{
                if(err) throw err;
                res.write('File Uploaded');
                res.end();
            })

        });
    }else{  
        
        // STEP 1:
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        console.log(req);
        return res.end();
    }
}).listen(8080);