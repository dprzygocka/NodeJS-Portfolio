(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    const textFieldBigScreen = document.getElementsByClassName("big-size")[0];
    const bigCarousel = document.getElementById("big-point");
    const smallCarousel = document.getElementById("small-point");

    result.projects.map(project => {
        /*  big screen carousel image*/
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (result.projects.indexOf(project) == 0){
            carouselItem.classList.add("active");
        }
        carouselItem.id = project.id;

        const container = document.createElement("div");
        container.classList.add("col-11", "projects-containers");
        container.onmouseover = function() {visible(project.id + "-small","container" + result.projects.indexOf(project))}; 
        container.onmouseout = function() {hidden(project.id + "-small","container" + result.projects.indexOf(project))};

        const image = document.createElement("img");
        image.id = "container" + result.projects.indexOf(project);
        image.classList.add("project-screen");
        image.setAttribute("src", project.image);
        image.setAttribute("alt", project.title);

        const textOnImage = document.createElement("div");
        textOnImage.classList.add("github-link");
        textOnImage.id = project.id + "-small";

        const projectTitle = document.createElement("h6");
        const boldedText = document.createElement("b");
        boldedText.innerText = project.title;
        const brake = document.createElement("br");

        const projectParagraph = document.createElement("p");
        projectParagraph.innerText = "Technology: " + project.technology;

        bigCarousel.appendChild(carouselItem);
        carouselItem.appendChild(container);
        container.appendChild(image);
        container.appendChild(textOnImage);
        textOnImage.appendChild(projectTitle);
        projectTitle.appendChild(boldedText);
        textOnImage.appendChild(brake);
        textOnImage.appendChild(projectParagraph);

        /* small screen size carousel*/
        const smallCarouselItem = document.createElement("div");
        smallCarouselItem.classList.add("carousel-item");
        if (result.projects.indexOf(project) == 0){
            smallCarouselItem.classList.add("active");
        }

        const textContainer = document.createElement("div");
        textContainer.classList.add("myProjectText");
        
        const slideHeadder = document.createElement("h3");
        slideHeadder.id = "color";
        slideHeadder.innerText = "MY WORK";

        const projectName = document.createElement("h1");
        projectName.classList.add("project-name");
        projectName.innerText = project.title;

        const projectDescription = document.createElement("h6");
        projectDescription.innerText = project.descripton;

        const projectTechnology = document.createElement("h6");
        projectTechnology.innerText = "Technology: " + project.technology;

        const projectLink = document.createElement("a");
        projectLink.classList.add("cv-link");
        projectLink.setAttribute("target", "_blank");
        projectLink.setAttribute("href", project.github);

        const projectButton = document.createElement("button");
        projectButton.classList.add("btn");
        projectButton.innerText = "Github";


        smallCarousel.appendChild(smallCarouselItem);
        smallCarouselItem.appendChild(textContainer);
        textContainer.appendChild(slideHeadder);
        textContainer.appendChild(projectName);
        textContainer.appendChild(projectDescription);
        textContainer.appendChild(projectTechnology);
        textContainer.appendChild(projectLink);
        projectLink.appendChild(projectButton);

        /* text from the left of the carousel describing what project is displayed*/
        const bigScreenTextContainer = document.createElement("div");
        bigScreenTextContainer.classList.add("myProjectText");
        bigScreenTextContainer.id = project.id + "-text";

        const bigScreenSlideHedder = slideHeadder.cloneNode(true);
        const bigScreenProjectName = projectName.cloneNode(true);
        const bigScreenProjectDescription = projectDescription.cloneNode(true);
        const bigScreenProjectLink = projectLink.cloneNode(true);
        
        textFieldBigScreen.appendChild(bigScreenTextContainer);
        bigScreenTextContainer.appendChild(bigScreenSlideHedder);
        bigScreenTextContainer.appendChild(bigScreenProjectName);
        bigScreenTextContainer.appendChild(bigScreenProjectDescription);
        bigScreenTextContainer.appendChild(bigScreenProjectLink);


    })
})(); 

function visible(textId,imgId){
    document.getElementById(textId).style.visibility = "visible";
    document.getElementById(imgId).style.opacity = "0.2";
}
function hidden(textId,imgId){
    document.getElementById(textId).style.visibility =  "hidden";
    document.getElementById(imgId).style.opacity = "1";
}


$(document).ready(function(){
    $('#small-carousel').bind('slide.bs.carousel', function () {
        if (document.getElementsByClassName("active")[0].id == "NordicMotorhome"){
            document.getElementById("NordicMotorhome-text").style.display = "none";
            document.getElementById("nodeJS-course-text").style.display= "inherit"
        
            } 
        else if (document.getElementsByClassName("active")[0].id == "nodeJS-course"){
            document.getElementById("nodeJS-course-text").style.display= "none";
            document.getElementById("NordicMotorhome-text").style.display= "inherit"
        }
    });
})
