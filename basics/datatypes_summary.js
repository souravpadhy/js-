// primitive
 //they r call by value

//js is dynamic, we donot have to assign number,boolean,float etc

// 7 types : string , number , value , Boolean , null , undefined ,Symbol , BigInt

//Refrence / Non-Primtive type: Arrays, Objects , Functions

const id = Symbol('123')
const anotherId = Symbol('123')
const outsideTemp = null

console.log(id===anotherId);

//const bigNumber = 1233342233859064;

const heros = ["shaktiman" , "nagraaj"];
let myObj = {
    name : "sourav",
    age: 18,
}


const MyFunction = function(){
    console.log("hello world");
}


console.log(typeof bigNumber);
console.log(typeof outsideTemp);