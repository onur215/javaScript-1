const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
   ];

   
const electronics = products.filter(({category}) => category === "Electronics")

const totalPrice = electronics.reduce((sum, {price}) => sum + price, 0)
console.log(totalPrice);

const averagePrice = totalPrice / electronics.length
console.log(averagePrice);

const clothes = products.filter(({category}) => category === "Clothes")

const clothesPriceTotal = clothes.reduce((sum, {price}) => sum + price, 0)

const averageClothes = clothesPriceTotal / clothes.length
console.log(averageClothes);

const result = [
    {category: 'Clothes', average : averageClothes},
    {category: 'Electronics', average : averageClothes}
]

console.log(result);

