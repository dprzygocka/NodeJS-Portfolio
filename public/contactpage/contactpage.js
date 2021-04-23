 window.addEventListener( 'load', function () { //adds an event so first html dom will be build
        

            
            const myform = document.getElementById("contactPageForm");
  

            const formEvent = myform.addEventListener("submit", (event) => { //adds event listner on submit
                
                event.preventDefault(); //method stops the default action of an element from happening. 
                //stop forms from automatically submitting when the submit button is clicked, 
                //giving you a chance to instead submit the form data asynchronously using JavaScript and something like the Fetch API to make an Ajax request.
                //without it the data would be sent to /api/contact and the whole page would be reloaded
                //prevent site from loading

                const form = new FormData(myform); //construct a set of key/value pairs representing form fields and their values,

                fetch("/api/contact", {method: 'POST', body: form}).then((response) => { return response.json()}); //fetch url def were the data will be sent, the fetch sends data from form to /api/contact
   

            });
        
});
