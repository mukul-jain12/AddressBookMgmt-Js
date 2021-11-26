const AddressBook = require("./AddressBook.js");
const prompt = require('prompt-sync')();

let addressBook = new AddressBook();
let contactList = new Array();
flag = true;

while (flag) {

    console.log("1. insert contacts in Address Book");
    console.log("2. display the list of Contact");
    console.log("3. edit contacts in Address Book");
    console.log("4. delete contacts in Address Book");
    console.log("5. count number of contacts in Address Book");
    console.log("6. to exit");
    let option = parseInt(prompt("Enter your choice : "));

    switch (option) {
        case 1:
            contactList = addressBook.insert(contactList);
            break;
        case 2:
            console.log(contactList);
            break;
        case 3:
            contactList = addressBook.editContact(contactList);
            break;
        case 4:
            contactList = addressBook.deleteContact(contactList);
            break;
        case 5:
            console.log("Number of contacts in the address book is : " + contactList.length);
            break;
        case 6:
            contactList = addressBook.searchContact(contactList);
            break;
        case 7:
            flag = false;
            break;
        default:
            console.log("You have entered invalid input!");
            flag = false;
            break;
    }
}