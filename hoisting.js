console.log(b)
var b = 90
console.log(b)

// output
// undefined
// 90

// reference data type
// in java
// String a = new String("Hello");
// String b = a;
// b = "World";
// System.out.println(a);  // "Hello"
// System.out.println(b);  // "World"

// in js
let a = { msg: "Hello" };
let b = a;
b.msg = "World";
console.log(a.msg); // "World" because both a and b refer to the same object