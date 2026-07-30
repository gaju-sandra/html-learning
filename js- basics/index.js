console.log('Hello World');
//variable declaration and the initialization 
//let: a reserved word 
let name='Gaju';
console.log(name);

//const:is used when u dont want the value of a variable to change 

const interestrate=0.3;
console.log(interestrate);

//values we can assign to the variables
//primitive value types and reerence types
//primitive value: string, number, boolean, undefined,null

let name1='Mosh';//String literal
let age=30;//Number
let isApproved= false;//Boolean literal
let firstName= undefined;//(when u don't assign a variable)
let selectedColor = null;// the type is an object

console.log(name1);

//java script is a progamming language that is dynamic


//2.REERENCE TYPES
//object

let person ={
    //properties
    name: 'Mosh',
    age: 30
};
console.log(person);
//ways o accessing a property

//a.dot natation
person.name= 'john';

//.bracket notation
person["age"] = 29;

console.log(person.age);

let selection = "age";
person [selection]= '15';
console.log(person.age);


