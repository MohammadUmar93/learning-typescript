// TYPING ARRAYS

let age: number = 100  // primitive type
let ages: number[] = [100, 101]  // number array

// Type 'string' is not assignable to type 'number'
// ages = [100, 101, "one"]

// Argument of type 'boolean' is not assignable to parameter of type 'number'
// ages.push(true)

type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}

/**
 * 11) Challenge: Create an array of people objects and
 *     manually type it as an array of Person types
 */

// let people: Person[] = [person1, person2]

// Another way from the concept of "Generics", we'll get into it later
// let people: Array<Person> = [person1, person2]