(async function getSkills() {
    const response = await fetch("/api/aboutMe");
    const result = await response.json();


    const skillsContainer = document.getElementById("skills-section");
    const skillsCarousel = document.getElementById("iconsCarousel-point");
    let last = -1;
    result.skills.map(skill => {
        /*  skills section */
        const skillContainer = document.createElement("div");
        skillContainer.classList.add("iconContainer", "col-lg-2");
        

        const skillImage = document.createElement("img");
        skillImage.classList.add("iconStyle");
        skillImage.setAttribute("src", skill.icon);
        skillImage.setAttribute("alt", skill.skillName);


        skillsContainer.appendChild(skillContainer);
        skillContainer.appendChild(skillImage);

        /* small carousel icon */
        
        let current = result.skills.indexOf(skill);

        if (last < current){

            const skillItem = document.createElement("div");
            skillItem.classList.add("carousel-item");
            if (result.skills.indexOf(skill) == 0){
                skillItem.classList.add("active");
            }

            const rowForSkills = document.createElement("div");
            rowForSkills.classList.add("row","iconsInTheMiddle");

            skillsCarousel.appendChild(skillItem);
            skillItem.appendChild(rowForSkills);



            for (i = current; i <= current +3; i++){
                if (result.skills[i] == undefined){
                    break;
                }
                const carouselSkillContainer = document.createElement("div");
                carouselSkillContainer.classList.add("iconContainer", "col-2");
                

                const skillCarouselImage = document.createElement("img");
                skillCarouselImage.classList.add("iconStyle");
                skillCarouselImage.setAttribute("src", result.skills[i].icon);
                skillCarouselImage.setAttribute("alt", result.skills[i].skillName);
        
                skillItem.appendChild(rowForSkills);
                rowForSkills.appendChild(carouselSkillContainer);
                carouselSkillContainer.appendChild(skillCarouselImage);
                last = i;
            }
        }
     
        
        
      

            
        
            
        
        
        
       
    })
})(); 