let person = {
    firstName: "Mara",
    lastName: "Grau",
    age: 24,
    height: 64
}

person.job = "student"
person["pet"] = ["Olive", "Mittens"]

// console.log(person);

// delete person.lastName;

// console.log("After Deletion");
// console.log(person);

// for (key in person) {
//     console.log(key);
//     console.log(person[key])
// }

// console.log(person.firstName);
// console.log(person['lastName']);
// const doodle = "age";
// console.log(person[doodle]);

// console.log(person.firstName);
// console.log(person['lastName']);

let meal = {
    appetizer: "breadsticks",
    entree: "chicken alfredo",
    dessert: "cheese cake",
    drink: "water",
    meds: ["vitamin D", "iron"],
    utensils: {spoons: 20}
}

const {dessert} = meal

// console.log(dessert);

const {appetizer, entree} = meal

// console.log(appetizer);
// console.log(entree);

const {drink: beverage} = meal;
// console.log(beverage);

const {dessert: snack, appetizer: shared} = meal
// console.log(snack, shared);

class AddressBookPage {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    printDetails() {
        console.log(`The name is ${this.name} and the email is ${this.email} and the phone is ${this.phone}`)
    }
}

class SocialMediaPage extends AddressBookPage {
    constructor(name, email, phone, website) {
        super(name, email, phone)
        this.website = website
    }
}

let olive = new AddressBookPage("Olive", "beanie@baby.com", "666-2345");
// console.log(olive);
let mittens = new AddressBookPage("Mittens", "big@chunky.com", "666-2345");
// console.log(mittens);
let judas = new SocialMediaPage("Judas", "tupes@poops.com", "000-0000", "WoofBook")
console.log(judas);

// olive.printDetails()

for (itmes in olive) {
    console.log(itmes)
}