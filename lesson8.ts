// UTILITY TYPES & PARTIAL

/*
// Utility Types:
   a) Like a function, they take other types in as a parameter and return a new type,
      with some changes made to it.
   b) Built-in to TypeScript; perform commonly-needed modifications to existing types
   c) Use "Generics" syntax using angle brackets (<>)
*/


/*
// 1) Partial Utility Type: This modifies the type you pass in and turns all properties into "optional" properties

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

// type UpdatedUser = {
//     id?: number
//     username?: string
//     role?: "member" | "contributor" | "admin"
// }

type UpdatedUser = Partial<User>

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
    // Find the user in the array by the id
    // Use Object.assign to update the found user in place
    // Check MDN if you need help with using Object.assign

    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return 
    }
    Object.assign(foundUser, updates)
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)


// ************************
// * MDN: Object.assign() *
// ************************
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// // Expected output: true

// console.log(source);
// // Expected output: Object { b: 4, c: 5 }
*/

/*
// 2) Omit Utility Type: Omit takes in a type AND a string (or union of strings) property name(s), and returns a new type with those properties removed

type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id">): User {
    // Create a new variable called `user`, add an `id` property to it
    // and spread in all the properties of the `newUser` object. Think
    // about how you should set the type for this `user` object.
    // Push the new object to the `users` array, and return the object
    // from the function at the end

    const user: User = { 
        id: nextUserId++, 
        ...newUser 
    }
    users.push(user)
    return user
}

// Example usage:
addNewUser({ username: "joe_schmoe",  role: "member" })

console.log(users)
*/