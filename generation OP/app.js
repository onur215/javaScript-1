//! object destructuring


const product = {
    id : 12345,
    brand : "Samsung",
    type : "Smart Phone",
    price : 2000
}

// console.log(product.id);

// console.log(product["brand"]);

let ids = product.id

ids = "67890"
// console.log(ids);

// console.log(product.id);

let brands = product["brand"]

const product2 = {
    id : "67890",
    brand : "Apple",
    type : "Smart Phone",
    price : 3000
}

// const {id, price} = product2

// const {id,price,brand,type} = product2

// console.log(id,price,brand,type);

const person = {
    personName: "Jean-Jacques",
    surname: "Rousseau"
}

// let {personName, surname, age = 66} = person
// console.log(personName,surname,age);

const person2 = {
    personName: "John",
    surname: "Doe"
}

let {personName: userName, surname: userSurname, Userage = 66} = person2
//console.log(userName,userSurname,Userage);

const person3 = {
    personName: "Jane",
    surname: "Doe"
}

//const printPerson = (insan) => {
    //console.log(`Name: ${insan.personName} Surname: ${insan.surname}`);
//}

// printPerson(person3)
// printPerson(person2)

// const printPerson2 = (person) => {
//     const {personName, surname} = person
//     console.log(`Name: ${personName} Surname: ${surname}`);
// }

// printPerson2(person2)
// printPerson2(person3)

// const printPerson3 = ({personName,surname}) => {
//     console.log(`Name: ${personName} Surname: ${surname}`);
// }

//printPerson3(person2)
//printPerson3(person3)

const user = {
    name: "Mark",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Istanbul",
      zip: "12345",
    },
  };

  console.log(user.address.city);

  //const {name, address} = user// adres obje olarak döner
  //console.log(name, address); // adres obje olarak döner

  //const {name, address:{city,zip,street}} = user
  //console.log(name, city, zip, street);

//   const company = {
//     name: 'Tech Corp',
//     location: {
//         country: 'USA',
//         address: {
//             street: '456 Tech Road',
//             city: 'New York',
//             zip: '67890'
//         }
//     },
//     employees: [
//         { name: 'John', position: 'Developer' },
//         { name: 'Jane', position: 'Designer' }
//     ]
// };

// company.location.address.city = "texas"

// const {name,location:{country,address:{city:companyCity}}} = company
// console.log(name,country,companyCity);

const num = [1,2,3,4,5]

let [first,second,third] = num

console.log(first);
console.log(second);
console.log(third);