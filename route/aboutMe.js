const router = require("express").Router();

const skills = [
    {
        icon: "../global/java.png",
        skillName: "Java",
        experience: "2 years"
    },
    {
        icon: "../global/js.png",
        skillName: "JavaScript",
        experience: "2 years"
    },
    {
        icon: "../global/nodeJS.png",
        skillName: "NodeJS",
        experience: "1 year"
    },
    {
        icon: "../global/git.png",
        skillName: "Git",
        experience: "2 years"
    },
    {
        icon: "../global/css.png",
        skillName: "CSS3",
        experience: "2 years"
    },
    {
        icon: "../global/bootstrap.png",
        skillName: "Bootstrap",
        experience: "2 years"
    },
    {
        icon: "../global/react.png",
        skillName: "ReactJS",
        experience: "1 year"
    },
    {
        icon: "../global/spring.png",
        skillName: "Spring",
        experience: "2 years"
    },
    {
        icon: "../global/c.png",
        skillName: "C#",
        experience: "2 years"
    },
    {
        icon: "../global/python.png",
        skillName: "Python",
        experience: "2 years"
    },
    {
        icon: "../global/jenkins.png",
        skillName: "Jenkins",
        experience: "1 year"
    },
    {
        icon: "../global/aws.png",
        skillName: "Amazon Web Services",
        experience: "1 year"
    },
    {
        icon: "../global/docker.png",
        skillName: "Docker",
        experience: "1 year"
    },
    {
        icon: "../global/mysql.png",
        skillName: "MySQL",
        experience: "2 years"
    },
    {
        icon: "../global/intellij.png",
        skillName: "Intellij IDEA",
        experience: "2 years"
    },
    {
        icon: "../global/vs.png",
        skillName: "Visual Studio",
        experience: "2 years"
    }

];

router.get("/api/aboutMe", (req,res) => {
    res.send({ skills })
});

module.exports = { router};