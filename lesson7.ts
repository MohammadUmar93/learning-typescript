// TS - SPECIFIC TYPES


// 1) "any" TYPE

/*
let value = 1

// These lines give us a warning
value = "hi"
value.toUpperCase()
*/

// Now, if we manually set it to 'any' type
let value: any = 1

value.toUpperCase()
value = "Hi"
value.map()