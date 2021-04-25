 window.addEventListener( 'load', function () { //adds an event so first html dom will be build
        

            
            
  

            document.addEventListener("submit", (event) => { //adds event listner on submit
                
                const myform = document.getElementById("contactPageForm");
                event.preventDefault(); //method stops the default action of an element from happening. 
                //stop forms from automatically submitting when the submit button is clicked, 
                //giving you a chance to instead submit the form data asynchronously using JavaScript and something like the Fetch API to make an Ajax request.
                //without it the data would be sent to /api/contact and the whole page would be reloaded
                //prevent site from loading

                const form = new FormData(myform); //construct a set of key/value pairs representing form fields and their values, form-data/multipart
                const searchParameters = new URLSearchParams(); //application/x-www-form-urlencoded

                for( const pair of form) {
                    searchParameters.append(pair[0], pair[1]);
                }
              
                fetch("/api/contact", {method: 'POST', body: searchParameters}).then((response) => {
                    myform.reset();
                    return response.json();
               
                     }); //fetch url def were the data will be sent, the fetch sends data from form to /api/contact
   

            });
        
});
