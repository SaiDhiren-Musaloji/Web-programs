
var a = ["Dhiren","Pankaj","Sachin",1,2,3]
// console.log(a[0]);
// console.log(a[1]);

// a.forEach(function(ele){
//     console.log(ele)
// });
// for(var i=0; i<a.length;i++){
//     console.log(a[i]);
// }
// console.log(a.length);

// a.push("Manish")
// console.log(a);
// a.pop() //removes element from the last
// console.log(a);
// a.unshift("manish");
// console.log(a);
// a.shift(); // removes element from the start
// console.log(a);

const person = {
    name: "Dhiren",
    age: 20,
    address: "Hyderabad",
}

console.log(person);
console.log(person.address);
console.log(person.age);
console.log(person.name);

const employees = [{
    name: "Dhiren",
    age: 20,
    address: "Hyderabad",
},
{
    name: "Sachin",
    age: 21,
    address: "Mumbai",
},
{
    name: "Aakash",
    age: 22,
    address: "Chandigarh",
},
];
// console.log(employees[1].address);

//Map Function

employees.map(function(i){
    console.log(i);
});

const stringData = JSON.stringify(person);
console.log(person);
console.log(typeof(person));

console.log(stringData);
console.log(typeof(stringData));

const objectData = JSON.parse(stringData);
console.log(objectData);
console.log(typeof(objectData));