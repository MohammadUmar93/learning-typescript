// // INTRO TO PIZZA APP

// const menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 }
// ];

// const nextOrderId = 1;
// const cashInRegister = 100; // let say we start each day with 100$
// const orderQueue = [];

// /** 
//  * 1) Challenge: Add a utility function "addNewPizza" that takes a pizza object
//  *    and adds it to the menu
//  */

// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }

// /**
//  * 2) Challenge: Write another utility function "placeOrder" that takes a pizza name parameter and:
//  *    1. Finds that pizza object in the menu,
//  *    2. Adds the income to the cashInRegister,
//  *    3. Pushes a "newOrder" object to the orderQueue
//  *       (e.g. {pizza: sslectedPizzaFromStep1, status: "ordered"})
//  *    4. Returns the newOrder object (just in case we need it later)
//  */

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);  // This array method returns the first array element for which the callback returns true

//     cashInRegister += selectedPizza.price; 
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }; // Added a new property "id" to track the orderId

//     orderQueue.push(newOrder);
//     return newOrder;
// }

// /**
//  * 3) Challenge: Write another utility function "completeOrder" that takes an "orderId" as a parameter and:
//  *    1. Finds the correct order in the orderQueue and marks it status as "completed"
//  *    2. For good measure, return the found order from the function
//  *
//  * Note: You'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database
//  */

// function completeOrder(orderId) {
//     const order = orderQueue.find(order => order.id === orderId);
//     order.status = "completed";
//     return order;
// }

// addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
// addNewPizza({ name: "BBQ Chicken", cost: 12 });
// addNewPizza({ name: "Spicy Sausage", cost: 11 });

// placeOrder("Chicken Bacon Ranch");
// completeOrder("1");

// console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);


// /*
// When we run this JS code, it gives us some runtime errors of which JS was not aware during the compile time. Now, TS help us identify such error before hand during the compile time. So, let us shift our code to TS.

// Errors are there:
// a) Assignment to constant variable [at line: 35, 36]
// b) In TS, we define a proper shape for each object using typing whereas JS can accept any shape of a particular object. E.g. We have added new pizza object of different shape [at line: 56-58]
// c) We can pass arguments of any type to function call [at line: 56-58, 61-62]
// d) There are many type related errors which we usually encounter during the runtime, they may crash our app  (TypeError) 
// */

// console.log("Moving this code to TypeScript...index.js => index.ts");



// // // // // // // // // // // // // // // // // // // // // // // // // //

/*
i) Execute "index.js" file using `node --loader ts-node/esm index.js` command
ii) Execute "index.ts" file using `node --loader ts-node/esm index.ts` command
*/

import { getPizzaDetail } from "./index.ts";
console.log(getPizzaDetail(1));

console.log(getPizzaDetail(false));