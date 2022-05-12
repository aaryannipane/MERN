const express = require('express');
const mysql = require('mysql');

const app = express();

// create connection with mysql
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodemysql"
})

// connect
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySql connected with database");
})


// create database route
app.get("/createdb", (req, res)=>{
    const sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result)=>{
        if(err) throw err;

        console.log(result);

        res.send("Database created");
    })
})


// create table route
app.get("/createtb", (req, res)=>{
    const sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))";

    // execute 
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post table created');
    })
})

// insert post 1
app.get("/addpost/:id", (req, res)=>{
    let post  = {title:`Post ${req.params.id}`, body:`This is post ${req.params.id}`};
    const sql = "INSERT INTO posts SET ?";

    const query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(`Post ${req.params.id} added`);
    })
});


// select post
app.get("/getposts", (req, res)=>{
    const sql = "SELECT * FROM posts";
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;

        console.log(result);
        res.send("posts fetched");
    })
})

// select single post
app.get("/getpost/:id", (req, res)=>{
    const sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;

        console.log(result[0].title);
        let data = result[0].title;
        res.send(`post fetched <br> Title : ${data} body : ${result[0].body}`);
    })
})


// update post 
app.get("/update/:id", (req, res)=>{
    let newTitle = "New Title";
    const sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;

    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("post updated");
    })
})

// delete post 
app.get("/delete/:id", (req, res)=>{
    let newTitle = "New Title";
    const sql = `DELETE FROM posts WHERE id = ${req.params.id}`;

    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send("post deleted");
    })
})


app.listen("3000", ()=>{
    console.log("server started at port 3000");
})