const number = [3, 5, 2, "4", "bes", "dort", 3, 6]

console.log(number.includes("bes"));
console.log(number.includes("four"));
console.log(number.includes("BES".toLowerCase()));

console.log(number.includes("bes",5));

console.log(number.indexOf(3));

let cars = ["bmw", "mercedes", "audi", "fiat"]

const slicedCars = cars.slice(1, 3)
console.log(slicedCars);