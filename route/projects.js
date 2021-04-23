const router = require("express").Router();

const projects = [
    {
        title: "NodeJS Website",
        descripton: "The website stores information learned during the course plus additional knwoledge from website w3school.com.",
        technology: "NodeJS with express, JS, jQuery, CSS, HTML, Bootstar, Visual Studio Code, Firefox inspector",
        github: "https://github.com/dprzygocka/NodeJS-Course",
        image: "../global/NodeJSCourse.png",
        id: "nodeJS-course"
    },
    {
        title: "Nordic Motorhome",
        descripton: "Spring Boot Web Application - KEA. The application allows employee to rent, process payment and check technical condition of the company's vehicles.",
        technology: "Application created with MVC pattern using: Java Spring Boot, MySQL database hosted on Microsoft Azure , CSS, HTML and template engine Thymeleaf",
        github: "https://github.com/basnow28/NordicMotorhome",
        image: "../global/nordic-motorhome.png",
        id: "NordicMotorhome"
    }
];

router.get("/api/projects", (req,res) => {
    res.send({projects});
})


module.exports = {
    router
}


