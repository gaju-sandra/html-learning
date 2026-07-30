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
//i was getting error because i wasn't having quotes on age and the selection


//Array: is a data structure used to store or represent a list o things

let selectedColors = ['red', 'blue'];
selectedColors[2]= 'green'
selectedColors[3]= 1;
console.log(selectedColors.length);


//funtions
//performing a task
function greet(names, lastname){
console.log("see this " +names+' ' + lastname);

}
greet('sandra','soso');
greet('Gaju','divine');

//calulating a value

function square(number){

    return number * number;
}

console.log(square(2))
