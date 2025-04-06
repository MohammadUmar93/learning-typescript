// LITERAL TYPES

/*
let myName = "Bob"       // type = 'string'
const myName2 = "Bob"    // type = '"Bob"'

// Cannot assign to 'myName2' because it is a constant or a read-only property.
myName2 = "Bill"         
*/

let myName: "Bob" = "Bob"
// Type '"Bobby"' is not assignable to type '"Bob"'
// let myName: "Bob" = "Bobby"

const myName2: "Bob" = "Bob"
// Type '"Bobby"' is not assignable to type '"Bob"'
// const myName2: "Bob" = "Bobby"


// UNION TYPES

/*
type UserRole = "guest" | "member" | "admin"

let userRole: UserRole =  "guest"
userRole = "member"
userRole = "admin"
// Type '"sdfkjhsdkfjh"' is not assignable to type 'UserRole'
// userRole = "sdfkjhsdkfjh"

type User = {
    username: string
    role: "guest" | "member" | "admin"
}
*/