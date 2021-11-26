//importing another class file to the class file
const PersonInformation = require("./PersonInformation.js");
const prompt = require('prompt-sync')();

class AddressBook {
    contactList = new Array();
    insert(contactList) {
        let personInfo = new PersonInformation();
        try {
            personInfo.firstName = prompt("Enter First Name : ");
            personInfo.lastName = prompt("Enter Last Name : ");
            personInfo.address = prompt("Enter Address : ");
            personInfo.city = prompt("Enter City : ");
            personInfo.state = prompt("Enter State : ");
            personInfo.zip = prompt("Enter Zip : ");
            personInfo.phoneNumber = prompt("Enter Phone Number : ");
            personInfo.email = prompt("Enter Email : ");
            contactList.push(personInfo);

            return contactList;
        }
        catch (e) {
            console.error(e);
        }
    }

    editContact(contactList) {
        let fName = prompt("Enter the First Name of the Contact : ");
        contactList.forEach(contact => {
            if ((contact.firstName === fName) == true) {
                let personInfo = new PersonInformation();

                personInfo.lastName = prompt("Enter Last Name : ");
                contact.lastName = personInfo.lastName;
                
                personInfo.address = prompt("Enter Address : ");
                contact.address = personInfo.address;
                
                personInfo.city = prompt("Enter City : ");
                contact.city = personInfo.city;
                
                personInfo.state = prompt("Enter State : ");
                contact.state = personInfo.state;
                
                personInfo.zip = prompt("Enter Zip : ");
                contact.zip = personInfo.zip;
                
                personInfo.phoneNumber = prompt("Enter Phone Number : ");
                contact.phoneNumber = personInfo.phoneNumber;
                
                personInfo.email = prompt("Enter Email : ");
                contact.email = personInfo.email;
            }
            else{
                console.log("No contact present with this name!")
            }
        });
        return contactList;
    }
}

module.exports = AddressBook;