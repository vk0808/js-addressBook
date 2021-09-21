// UC 1
// class definition
class AddressBookJs {
  // constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  // UC 2 validate contact details
  // Name: first letter should be capital and min 3 letters
  get firstName() { return this._firstName; }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if (nameRegex.test(firstName))
      this._firstName = firstName;
    else
      throw "Invalid first Name";
  }

  // Name: first letter should be capital and min 3 letters
  get lastName() { return this._lastName; }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    if (nameRegex.test(lastName))
      this._lastName = lastName;
    else
      throw "Invalid last Name";
  }

  // Address: minimum four characters
  get address() { return this._address; }
  set address(address) {
    let addressRegex = RegExp("^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$");
    if (addressRegex.test(address))
      this._address = address;
    else
      throw "Invalid address ";
  }

  // City: minimum four characters
  get city() { return this._city; }
  set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city))
      this._city = city;
    else
      throw "Invalid city ";
  }

  // State: minimum four characters
  get state() { return this._state; }
  set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
      this._state = state;
    else
      throw "Invalid state";
  }

  // Zip: pin code of form 400 088 or 400088
  get zip() { return this._zip; }
  set zip(zip) {
    let zipRegex = RegExp("^[1-9]{3}[ ]*[0-9]{3}$");
    if (zipRegex.test(zip))
      this._zip = zip;
    else
      throw "Invalid zip ";
  }

  // PhoneNumber: phone number should be of form 91 9650925666
  get phoneNumber() { return this._phoneNumber; }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
    if (phoneRegex.test(phoneNumber))
      this._phoneNumber = phoneNumber;
    else
      throw "Invalid phone number";
  }

  // Email:  valid email id, e.g. ac.xyz@gmail.com.in
  get email() { return this._email; }
  set email(email) {
    let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
    if (emailRegex.test(email))
      this._email = email;
    else
      throw "Invalid email";
  }

  // method
  toString() {
    return "First Name: " + this.firstName + ", Last Name: " + this.lastName + "\nAddress: " + this.address + ", \nCity: " + this.city
      + ", \nState: " + this.state + " \nZip: " + this.zip + ", \nPhone Number: " + this.phoneNumber + ", \nEmail: " + this.email;
  }
}

// UC 3
let contactDetailsArray = new Array();

// Add contact details to array
try {
  contactDetailsArray.push(new AddressBookJs("Rahul ", "Gowda", "2nd cross Ramnagar Nagar", "Mysore", "Karnataka", "580082", "8123351458", "rahul@gmail.com"));
  contactDetailsArray.push(new AddressBookJs("Ravi ", "Kumar", "3nd cross", "Bangalore", "Karnataka", "800078", "934747358", "ravi@gmail.com"));
  contactDetailsArray.push(new AddressBookJs("Asha", "Kumari", "4nd cross Indira Nagar", "Bangalore", "Karnataka", "580003", "1234567896", "asha@gmail.com"));
  contactDetailsArray.push(new AddressBookJs("Porvi", "Shetty", "2nd cross", "Mandya", "Karnataka", "560078", "0987654321", "porvi@gmail.com"));
  contactDetailsArray.push(new AddressBookJs("Raja", "M", "2nd cross Rajaji Nagar", "Gadag", "Karnataka", "570006", "0987654321", "raja@gmail.com"));
}
catch (e) {
  console.error(e);
}
Display();

function Display() {
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));
}