/*
HTTP requests are ASYNCHRONOUS

---------------------------
create a new http message to send it to the backend
const xhr = new XMLHttpRequest();

//setting up this request 
xhr.open('GET', 'https://ANYURL/'); // the first parameter is the request type ex get post put delete , second parameter tells the computer where to send this http message 

// waits for the responce
xhr.addEventListener('load', ()=>{

    xhr.response;
   // console.log( xhr.response);

});

//get: gets info from the backend

//send the message (asynchrones code)
xhr.send();  

// get the responce (takes time to be obtained to it will be undefined)
//xhr.response;



/* 


--------------------
list of all the url supported : backend API 
----------------
Read the documentation to know the URL paths that the backend provides 
--------------
Status Code : ex 404 , 200ok

started with 4 : error our problem
started with 5 : backend problem
strted with 2: OK 
--------------
//get: gets info from the backend
----------------
we can send diffrent requests to the backend using url paths 
----------------
first set up the event listeners and then trigger the event 
----------------------
asynchrones code: does not wait for this line of code to finsish;

------------------------
-using inspect --> network --> make sure to open it first then do the actions or do the actions and refresh 

output:

Header tab :
Request URL:
https://ANYURL/
Request Method:
GET
Status Code:
200 OK
Remote Address:
51.89.247.113:443
Referrer Policy:
strict-origin-when-cross-origin

responce tab:

Hello!


preview tab :
takes the repoce and dispay it in a easy to read 
--------------------------

JSON :

JSON is often used to store and transmit data in a structured way.

--> Data is represented as key-value pairs.
Keys are strings, and values can be strings, numbers, arrays, objects, booleans, or null.
Objects are enclosed in curly braces {} and arrays in square brackets [].
JSON is essential for API calls,

ex :

// JSON Object as a JavaScript string

let jsonString = '{"name": "Reve", "age": 22, "skills": ["JavaScript", "Java", "Python"]}';

// Parsing the JSON string into a JavaScript object
let userObject = JSON.parse(jsonString);

console.log(userObject.name);  // Output: Reve
console.log(userObject.age);   // Output: 22
console.log(userObject.skills); // Output: ["JavaScript", "Java", "Python"]

// Converting a JavaScript object to a JSON string

let newUser = {
  name: "Reine",
  age: 30,
  skills: ["React", "Node.js", "CSS"]
};

let jsonNewUser = JSON.stringify(newUser);
console.log(jsonNewUser); 
 // Output: '{"name":"Reine","age":30,"skills":["React","Node.js","CSS"]}'

---> JSON.parse(): Converts a JSON string into a JavaScript object.
---->JSON.stringify(): Converts a JavaScript object into a JSON string.
*/