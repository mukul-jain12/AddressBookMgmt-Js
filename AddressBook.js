//importing another class file to the class file
const PersonInformation = require("./PersonInformation.js"); 
const prompt = require('prompt-sync')();


let personInfo = new PersonInformation();
try{
    personInfo.firstName = prompt("Enter First Name : "); 
    personInfo.lastName = prompt("Enter Last Name : "); 
    personInfo.address = prompt("Enter Address : "); 
    personInfo.city = prompt("Enter City : "); 
    personInfo.state = prompt("Enter State : "); 
    personInfo.zip = prompt("Enter Zip : "); 
    personInfo.phoneNumber = prompt("Enter Phone Number : "); 
    personInfo.email = prompt("Enter Email : "); 
    console.log(personInfo.toString());
}
catch (e) {
    console.error(e);
}