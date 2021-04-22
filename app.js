const express = require("express");
const app = express();
const fetch = require("node-fetch");
const fs = require("fs")
const formData = require('form-data');



app.use(express.json()); //by default express doesnt parse the body of http requests
app.use(express.static('public')); //set to send more than just html but also css, js, img
app.use(express.urlencoded({ extended: true }))//reads whole json from form name = key 

//routes
const routeProjects = require("./route/projects") //imports route package
app.use(routeProjects.router) //imports routes in route the order matters!

const routeContact = require("./route/contact") //imports route package
app.use(routeContact.router) //imports routes in route the order matter

const routeAboutMe = require("./route/aboutMe") //imports route package
app.use(routeAboutMe.router) //imports routes in route the order matter

//Search engine optimalisation reason to use  SSR

const global = fs.readFileSync(__dirname + "/public/global/global.html", {encoding:'utf8', flag:'r'});
const nav = fs.readFileSync(__dirname + "/public/navigation/nav.html", {encoding:'utf8', flag:'r'});
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", {encoding:'utf8', flag:'r'});



const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html",  {encoding:'utf8', flag:'r'}); //fs = file system, it return frontpage html
app.get('/', (req,res) => {
    //__dirname return path to server
        res.send(global + frontpage + nav + footer) //it server the whole page at once
    })


const contact = fs.readFileSync(__dirname + "/public/contactpage/contactpage.html",  {encoding:'utf8', flag:'r'});     
app.get('/contact', (req,res) => {
    //__dirname return path to server
        res.send(global + contact + nav + footer)
    })

const projects = fs.readFileSync(__dirname + "/public/myProjects/myProjects.html",  {encoding:'utf8', flag:'r'});     
app.get('/projects', (req,res) => { //there is trailing slah here, why it appeared???
    //__dirname return path to server
        res.send(global + projects + nav + footer)
    })

const aboutMePage = fs.readFileSync(__dirname + "/public/aboutMePage/aboutMePage.html",  {encoding:'utf8', flag:'r'});     
app.get('/aboutMe', (req,res) => {
    //__dirname return path to server
        res.send(global + aboutMePage + nav + footer)
    })

const PORT = process.env.PORT || 8080;
console.log("Server is running")
app.listen(PORT, e => e ? console.log(e) : 'server is running on: ',PORT);


//nodemon repload problems
//nodemn doesn't reload html so to fix nodemon --ext "js, html" app.js or create config file with htis command so you don't have to remeber it everytime

