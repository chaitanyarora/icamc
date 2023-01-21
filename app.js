const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/guidelines", function(req, res){
  res.render("guidelines");
});

app.get("/dates", function(req, res){
  res.render("dates");
});

app.get("/registration", function(req, res){
  res.render("registration");
});

app.get("/call", function(req, res){
  res.render("call");
});

app.get("/publications", function(req, res){
  res.render("publications");
});

app.get("/list", function(req, res){
  res.render("list");
});

app.get("/committee", function(req, res){
  res.render("committee");
});

app.get("/publications", function(req, res){
  res.render("publications");
});

app.get("/submission", function(req, res){
  res.render("submission");
});

// const data = require("D:/College/Website/about-data.json");

// var mydata = JSON.parse(data);

// console.log(mydata);

// const fs = require('fs');
// fs.readFile("about-data.txt", function(){
//
// });
//
// fs.toString()
//
// console.log(fs);

// app.post("/compose", function(req, res){
//
//   const post1 = new Post({
//     title: req.body.postTitle,
//     content: req.body.postBody
//   });
//
//   post1.save(function(err){
//     if(!err){
//       res.redirect("/");
//     }
//   });


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
