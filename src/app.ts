import 'reflect-metadata'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
// import _ from 'lodash'

// console.log(_.shuffle([1,2,33]));

import { Product } from './product.model'

const products = [
    { title: 'A Carpet', price: 29.99},
    { title: 'A Book', price: 19.99}
]
// const loadProducts = products.map( prod => {
//     return new Product(prod.title, prod.price)
// })

// for (const prod of loadProducts) {
//     console.log(prod.getInformation());
// }

const loadProducts = plainToClass(Product, products)

for (const prod of loadProducts) {
    console.log(prod.getInformation());
}

const newProduct = new Product('', -5.99)
validate(newProduct).then( errors => {
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(newProduct.getInformation());
    }
})


const p1 = new Product('A Book', 12.99)


console.log(p1.getInformation());
