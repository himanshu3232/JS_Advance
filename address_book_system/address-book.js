//create a new class Address Book with appropriate fields and export it
class AddressBook{
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        validate(firstName, lastName, address, city, state, zip, phoneNumber, email)
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

function validate(...args){
    let validateName = /^[A-Z]+[a-zA-Z]{2,}$/
    let validateAddress = /[A-Za-z0-9]{4,}/
    let validateZip = /[ a-z0-9]{6,}/
    let validatePhoneNumber1 = /^\+\d{1,3}-\d{3}-\d{3}-\d{4}$/
    let validatePhoneNumber2 = /[0-9]{10}/
    let validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(!validateName.test(args[0]) || 
    !validateName.test(args[1]) ||
     !validateAddress.test(args[2]) || 
     !validateAddress.test(args[3]) ||
     !validateAddress.test(args[4]) || 
     !validateZip.test(args[5]) ||
     !(!validatePhoneNumber1.test(args[6]) || !validatePhoneNumber2.test(args[6])) ||
      !validateEmail.test(args[7])){
        throw new Error('Invalid input')
      }
}

let book = new AddressBook("First","Last","Address","City","State","100 000","1000000000","okx@okok.com");

console.log(book);