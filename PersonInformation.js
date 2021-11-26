class PersonInformation {

    //property
    firstName; lastName; address; city; state; zip; phoneNumber; email;

    //setter and getter method
    set firstName( firstName ) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if ( nameRegex.test( firstName )) {
            this.firstName = firstName;
        }
        else {
            throw "First Name is Incorrect!";
        }
    }

    get firstName() {
        return this.firstName;
    }

    set lastName( lastName ) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if ( nameRegex.test( lastName )) {
            this.lastName = lastName;
        }
        else {
            throw "Last Name is Incorrect!";
        }
    }

    get lastName() {
        return this.lastName;
    }

    set address( address ) {
        let addRegex = RegExp('^([0-9A-Za-z\\s,-\\\\.]{4,})$');
        if ( addRegex.test( address )) {
            this.address = address;
        }
        else {
            throw "Address is Incorrect!";
        }
    }

    get address() {
        return this.address;
    }

    set city( city ) {
        let cityRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( cityRegex.test( city )) {
            this.city = city;
        }
        else {
            throw "City is Incorrect!";
        }
    }

    get city() {
        return this.city;
    }

    set state( state ) {
        let stateRegex = RegExp('^([A-Za-z\\s]{4,})$');
        if ( stateRegex.test( state )) {
            this.state = state;
        }
        else {
            throw "State is Incorrect!";
        }
    }

    get state() {
        return this.state;
    }

    set zip( zip ) {
        let zipRegex = RegExp('^([0-9]{6})|([0-9]{3}(\\s)[0-9]{3})$');
        if ( zipRegex.test( zip )) {
            this.zip = zip;
        }
        else {
            throw "Zip is Incorrect!";
        }
    }

    get zip() {
        return this.zip;
    }

    set phoneNumber( phoneNumber ) {
        let phoneRegex = RegExp('^(0|91)?[\\s][0-9]{10}$');
        if ( phoneRegex.test( phoneNumber )) {
            this.phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number is Incorrect!";
        }
    }

    get phoneNumber() {
        return this.phoneNumber;
    }

    set email( email ) {
        let emailRegex = RegExp('^[A-Za-z0-9!#$%&*+\\\\=?`{|}~^-]+(?:\\.[A-Za-z!#$%&*+\\\\=?`{|}~^-]+)*@(?:([0-9-]{1}|[a-zA-Z]{3,5})\\.)+[a-zA-Z]{2,3}$');
        if ( emailRegex.test( email )) {
            this.email = email;
        }
        else {
            throw "Email is Incorrect!";
        }
    }

    get email() {
        return this.email;
    }

    //method
    toString() {
        return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city + ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
    }
}

//exporting the class file to another class
module.exports = PersonInformation;