// STORING OBJECTS AND ARRAYS

// INTRODUCING JSON - JAVASCRIPT OBJECT NOTATION
//  JSON is a lightweight data interchange format used to transmit data over a network.

var person = {};
person.name = "Larry King";
person.age = 81;
person.gender = "male";

// person;
// Object {name: "Larry King", age: 81, gender: "male"}

/* Serialization - is the process of taking an object in your code and converting it to a JSON object. */

/* stringify() function converts an object or objects into a JSON object(s) and then returns that JSON as a string */

var jsonPerson = JSON.stringify(person);

// This converts the person object to JSON and saves the result to the jsonPerson variable.
// Type the following into the console to see the output.

// var jsonPerson = JSON.stringify(person);
// undefined

// jsonPerson;
// "{"name":"Larry King","age":81,"gender":"male"}"


/* Parsing - takes a JSON object and converts it to an object that can be used in JavaScript code. */

/* parse() function converts JSON back to JavaScript objects, just pass in JSON to the parse function e.g. parse(JSON) */

JSON.parse(jsonPerson);
// Object {name: "Larry King", age: 81, gender: "male"}


// OBJECTS IN LOCAL STORAGE

// Create an object.

var myObject = {};
myObject.name = "book";
myObject.color = "green";
myObject.pages = 292;

  /*myObject;
   Object {name: "book", color: "green", pages: 292}*/

// Convert the object to JSON.

var json = JSON.stringify(myObject);

  /*json;
   "{"name":"book","color":"green","pages":292}"*/

// Store the JSON using localStorage;

localStorage.setItem("myObject", json);


// RETRIEVING OBJECTS

// Get the JSON from the datastore.

var retrievedJson = localStorage.getItem("myObject");

  /*retrievedJson;
  * "{"name":"book","color":"green","pages":292}"*/

// Convert the JSON to a JavaScript Object;

var myNewObject = JSON.parse(retrievedJson);

  /*myNewObject;
   Object {name: "book", color: "green", pages: 292}*/


// Arrays in localStorage

//  Arrays can be stored the same way that objects are.
// Convert the array to JSON.
// Store it as a string.
// Retrieve the array by parsing the stored JSON.

// Create an array.

var myArray = ["Mike", "Jim", "Becky", "Jo", "Steph"];
  /*myArray;
   ["Mike", "Jim", "Becky", "Jo", "Steph"]*/

// Convert the array to JSON.

var myJsonArray = JSON.stringify(myArray);
  /*myJsonArray;
   "["Mike","Jim","Becky","Jo","Steph"]"*/

// Store the JSON.

localStorage.setItem("myArray", myJsonArray);

// Retrieve the array.

var retrievedJson = localStorage.getItem("myArray");
  /*retrievedJson;
   "["Mike","Jim","Becky","Jo","Steph"]"*/

// Parse the JSON.

var myNewArray = JSON.parse(retrievedJson);
  /*myNewArray;
   ["Mike", "Jim", "Becky", "Jo", "Steph"]*/

// NOTE: localStorage is designed only to hold simple data.  If you want to store multiple objects that have the same structure, you are better off using a database.

//  HTML5 introduced IndexedDB for maintaining a client-side database.


// SESSION STORAGE

// localStorage is persistent. The data you save stays there when you close your browser.
// sessionStorage leverages localStorage and the Storage Object, but sessionStorage data is wiped when the user closes the window and ends the session.

sessionStorage.setItem("name", "Johnny Carson");
sessionStorage.getItem("name");
  /*"Johnny Carson"*/
sessionStorage.key(0);
  /*"name"*/
sessionStorage.removeItem("name");
sessionStorage.key(0);
  /*null*/
sessionStorage.clear();
sessionStorage.key(0);
  /*null*/

// ADDITIONAL CONSIDERATIONS ON USING CLIENT-SIDE STORAGE

  // The purpose of client-side storage is to enhance the user experience.

// Storage Limits - 2.5-5MB of data
// Web Storage Support Test Tool - http://dev-test.nemikor.com/web-storage/support-test/

// User Tracking
// W3C WebStorage Specification - http://www.w3.org/TR/webstorage/

// Cross Directory Attacks
//  e.g. geocities.com
//    All pages shared the same datastore on the client, meaning that everyone could access, change, or delete the data stored by everyone else's pages.
//      It is recommended that you don't use client-side storage if you are building an application that enables users to create customized web pages under the same domain.


