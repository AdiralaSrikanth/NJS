// const name ='srikanth'
// const age = 25
// //oject prop shorthand
// const user = {
//     name,
//     age,
//     place: undefined
// }

// console.log(user)
//object destructuring

const product = {
    name: 'santoor',
    price: 40,
    stock: undefined,
    rating: 4.2
}

const {name:productName, price , rating = 5} = product

const products = (type, {name, price})=>{
    console.log(type, name, price)
}

products('order', product)



// const name = product.name
// // const price = product.price
// console.log(productName)
// console.log(price)
// console.log(rating)

















