// PIZZA APP

/**
 * 7) Challenge: Create a Pizza object type. It should include a `name`
 *    and a `price` property.
 */

type Pizza = {
    id: number  // new property added
    name: string
    price: number
}

/**
 * 10) Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 *     Look through the code if you need a reminder as to what data types those should be.
 */

// type Order = {
//     id: number
//     pizza: Pizza   // Nested Object Type
//     status: string
// }

/**
 * 13) Challenge: Using literal types and unions, update the Order status so that
 *     it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

// a) TypeError: Assignment to constant variable. Fix: const to let declaration (for cashInRegister & nextOrderId)
let cashInRegister = 100  
let nextOrderId = 1
let nextPizzaId = 1

// TypeScript did not infer menu as an array of Pizza type before explicit typing
// const menu: Pizza[] = [
//     { id: 1, name: "Margherita", price: 8 },
//     { id: 2, name: "Pepperoni", price: 10 },
//     { id: 3, name: "Hawaiian", price: 10 },
//     { id: 4, name: "Veggie", price: 9 }
// ]

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 }
]

const orderQueue: Order[] = []

/**
 * 8) Challenge: Teach TS that the pizzaObj is supposed to be a Pizza type.
 *    Then like before, look through the code to see if there are any new
 *    TS warnings to deal with (😉), and fix those issues
 */

// d) Issue: Parameter 'pizzaObj' implicitly has an 'any' type. Fix: Allowed pizzaObj to take 'Pizza' type only
// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj)
// }

// void return type
// function addNewPizza(pizzaObj: Pizza): void {
//     menu.push(pizzaObj)
// }

/**
 * 18) Challenge (part 1): Make it so we can use a global variable to track the `nextPizzaId`
 *     and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 *     Update the menu items to use this as well so we don't have to manually enter ids 1-4
 *     like we're currently doing
 */

/**
 * 18) Challenge (part 1.5): Try to move the logic for adding an ID to the pizza objects 
 *     inside the addNewPizza function, so that we can call addNewPizza with no id, and
 *     the function will handle that part for us.
 * 
 * NOTE: You will run into TS warnings that we'll address soon, but the code should
 * still run.
 */

// function addNewPizza(pizzaObj: Pizza): void {
//     pizzaObj.id = nextPizzaId++;
//     menu.push(pizzaObj)
// }

/**
 * 19) Challenge:
 *     Fix the addNewPizza function using the Omit utility type. This might
 *     require more than just changing the "Pizza" typed `pizzaObj` parameter
 */

// function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
//     const newPizza: Pizza = {
//         id: nextPizzaId++,
//         ...pizzaObj
//     }
//     menu.push(newPizza)
//     return newPizza
// }

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", price: 12 })
// addNewPizza({name: "Spicy Sausage", price: 11 })


/**
 * 17) Challenge: Add explicit return types to the rest of our functions
 */

// function placeOrder(pizzaName: string): Order | undefined { // selectedPizza maybe undefined when we place order for a non-existing pizzaName
//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
// // b) TypeError: Cannot read properties of undefined (reading 'price'). Fix: Added if statement
//     if(!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`)
//         return
//     }
//     cashInRegister += selectedPizza.price
// /* f) Issue: Argument of type '{ id: number; pizza: { name: string; price: number; }; status: string; }' is not assignable to parameter of type 'Order'. 
// Types of property 'status' are incompatible. Type 'string' is not assignable to type '"ordered" | "completed"'.
// Fix: Explicitly typed newOrder to 'Order' type */
//     const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
//     orderQueue.push(newOrder)
//     return newOrder
// }

function addNewPizza(pizzaObj: Pizza): Pizza {
    menu.push(pizzaObj)
    return pizzaObj
}

function placeOrder(pizza: Pizza): Order | undefined {
    const newOrder: Order = { id: nextOrderId++, pizza: pizza, status: "ordered" }
    orderQueue.push(newOrder)
    cashInRegister += pizza.price
    return newOrder
}

/**
 * 20) Challenge: Add types to our generic `addToArray` function. It should work
 *     for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
 */

// before applying generics
// function addToArray(array , item) {
//     array.push(item)
//     return array
// }

// after applying generics <T>
function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

// Example usage:
// addToArray(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "done" })

/**
 * 20) Mini-challenge: What should be passed in as the generic type to addToArray function calls on line 172/173?
 */

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)

/**
 * 5) Challenge: Teach TS what data type should be used for the 
 *    orderId in the completeOrder function. Then check for any
 *    additional warnings TS comes up with and fix those.
 */

/**
 * 12) Challenge: Fix the warning below by handling the "sad path" scenario!
 */

// c) Issue: Parameter 'orderId' implicitly has an 'any' type. Fix: Allowed orderId to take 'number' type only
function completeOrder(orderId: number): Order | undefined { // order maybe undefined when we complete order for a non-existing orderId
    const order = orderQueue.find(order => order.id === orderId) 
// e) Warning: Cannot read properties of undefined (reading 'status'). Fix: Added if statement
    if(!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

/**
 * 14) Challenge: Create a new utility function called "getPizzaDetail". It will take
 *     a parameter called `identifier`, but there's a twist: we want this identifier
 *     to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 *     OR to be the number ID of the pizza (e.g. 2).
 * 
 *     Don't worry about the code inside the function yet, just create the function
 *     signature, making sure to teach TS that the `identifier` parameter is allowed
 *     to either be a string or a number.
 */

// function getPizzaDetail(identifier: string | number) {
//     // Code
// }

/**
 * 15) Challenge: Write the code to check if the parameter is a string
 *     or a number, and use the menu.find() method accordingly
 */

// function getPizzaDetail(identifier: string | number) {
//     if (typeof identifier === "string") {
//         return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
//     }   
//     else { 
//         return menu.find(pizza => pizza.id === identifier) 
//     }
// }

// Remember to be EXPLICIT whenever you can
// export function getPizzaDetail(identifier: string | number) {
//     if (typeof identifier === "string") {
//         return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
//     }
//     else if (typeof identifier === "number") {
//         return menu.find(pizza => pizza.id === identifier)
//     } else {
//         throw new TypeError("Parameter `identifier` must be either a string or a number")
//     }
// }

/**
 * 16) Challenge (part 1): Add a return type to the getPizzaDetail function.
 * 
 * NOTE: You're very likely going to get a big TS warning once you do this 😅
 * Don't fret, we'll address this warning next! 
 */

// export function getPizzaDetail(identifier: string | number): Pizza {
//     if (typeof identifier === "string") {
//         return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
//     }   // else { return menu.find(pizza => pizza.id === identifier) }
//     else if (typeof identifier === "number") {
//         return menu.find(pizza => pizza.id === identifier)
//     } else {
//         throw new TypeError("Parameter `identifier` must be either a string or a number")
//     }
// }

/**
 * 16) Challenge (part 2): Explicitly type the return value of this function
 *     to tell TypeScript it could either be a Pizza object or undefined
 *     as the return value.
 */

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }   // else { return menu.find(pizza => pizza.id === identifier) }
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}

addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 })

/*
// addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
// addNewPizza({id: 5, name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ name: "BBQ Chicken", cost: 12 })
// addNewPizza({id: 6, name: "BBQ Chicken", price: 12 })
// addNewPizza({ name: "Spicy Sausage", cost: 11 })
// addNewPizza({id: 7, name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Baccon Ranch")
placeOrder("Chicken Bacon Ranch")

// Argument of type '"1"' is not assignable to parameter of type 'number'.
// completeOrder("1")
completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)
*/


// // // // // // // // // // // // // // // // // // // // // // // // // //

// Original Code from index.js
/*
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
];

const nextOrderId = 1;
const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    cashInRegister += selectedPizza.price; 
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };

    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    order.status = "completed";
    return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
*/

// // // // // // // // // // // // // // // // // // // // // // // // // //

/*
a) Learn about 'any', 'never' and 'unknown' types in TS
b) Learn about interface & optional parameter (?) in TS
*/