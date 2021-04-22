
$(document).ready(function(){


    function activatNavTab(idToActivate){
        
        document.getElementById(idToActivate).classList.add("activeNav");
    }
    switch (document.location.pathname){
        case '/':
            activatNavTab("home");
            break;
        case '/aboutMe':
            activatNavTab("about");
            break;
        case '/projects/':
            activatNavTab("projects");
            break;
        case '/contact':
            activatNavTab("contact");
            break;
        default:
            console.log(document.location.pathname);
            console.log("Sorry no menu tag for this route!");
    }
       

    

    function blackNav(){
        document.getElementById("nav-right").classList.remove("navbar-dark");
        
        document.getElementById("nav-right").classList.add("navbar-light");
        
        
    } 

    function whiteNav(){
        document.getElementById("nav-right").classList.remove("navbar-light");
        
        document.getElementById("nav-right").classList.add("navbar-dark");
        
    } 

})