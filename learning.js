let name = "shiwani";
let age = 22;
// this person is an object

// ----- IMPORTANT ----

// let person = {
//       name:"Shiwani Soni",
//       age: 21, 
//       name:"harsh", // this is overriding the above part
//       age:20
// };

// to solve the above part, make a list of objects

let person = [
      {
            name : "Shiwani",
            age : 22
      },
      {
            name : "Harsh",
            age : 20
      }
]
person.name = 'Kirti';
person['name'] = 'Rahul';

// the above is not a part of the list, hence Kirti got overriden by Rahul

console.log (name);
console.log (person);
console.log (typeof(person)); 

let colors = ['red', 'blue', 32]
colors[6] = 'purple'
console.log(colors) // output : [ 'red', 'blue', 32, <3 empty items>, 'purple' ]
console.log(typeof(colors))