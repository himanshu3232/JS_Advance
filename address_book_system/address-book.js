//create a new class Address Book with appropriate fields and export it
class AddressBook{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        let regex = /^[A-Z]+[a-zA-Z]{2,}/
        if(!regex.test(firstName) || !regex.test(lastName)) throw new Error(`Invalid first or last name: ${firstName} ${lastName}`);
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let book = new AddressBook("abcd","zyx",1,1,1,1,1,1);

console.log(book);