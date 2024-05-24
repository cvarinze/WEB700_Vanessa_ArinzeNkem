
/***********************************************************
 *  WEB700 – Assignment 1
    * I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
* No part of this assignment has been copied manually or electronically from any other source
    * (including web sites) or distributed to other students.
* 
* Name: Chinyere Vanessa Arinze Nkem ---- Student ID: __133404236__ Date: _24/05/2024_**/




var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment 1", "This course name is WEB700. This assignment was prepared by Chinyere Vanessa Arinze Nkem", "cvarinze-nkem@myseneca.ca <Chinyere Vanessa Arinze Nkem>", "Hello, User Logged In", "Main Panel", "Logout Complete. Goodbye"];



// Creating a web server simulation Function - httpRequest,
// function with indexOF
function httpRequest(httpVerb, path) {
    for (var i = 0; i < serverPaths.length; i++){
        if (serverPaths[i] === path) {
            if (serverVerbs[i] === httpVerb) {
                var ReturnStatement = "200: " + serverResponses[i];
                return ReturnStatement;
            
            }
        }
}
var ReturnStatement = "400: unable to process " + httpVerb + "request for" + path;
return ReturnStatement;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



/** Step 5: Manual Testing **/

console.log(httpRequest("GET","/"));
console.log(httpRequest("GET","/about"));
console.log(httpRequest("GET","/contact"));
console.log(httpRequest("POST","/login"));
console.log(httpRequest("GET","/panel"));
console.log(httpRequest("GET","/logout"));



/*** Step 6 : Automate Testing **/

function automateTests() {

    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    function randomRequest() {
        var verb_random_index = getRandomInt(testVerbs.length);
        var path_random_index = getRandomInt(testPaths.length);
        var randVerb = testVerbs[verb_random_index];
        var randPath = testPaths[path_random_index];

        console.log(httpRequest(randVerb, randPath));
    }

    setInterval(randomRequest, 1000);
}


/** Step 7 : Invoke Automate Testing **/

automateTests();



