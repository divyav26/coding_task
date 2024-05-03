// Write down the 10 new features introduced in ES6 along with what they mean and where they could be 

// ***** let keyword 
//=> It creates a block scoped variable which can reassigned but cannot be redeclared.

let a = 10
// let a=20 //cannot be redeclared
a=20 //It is allowed we can reassigned

const fun = ()=>{
    let x= 10
    console.log(x)
}
// console.log(x)
// x is not defined because x have block scoped 
fun()





// ***** const keyword 

// const =>It also creates a block scoped variable which cannot reassigned or cannot be redeclared.
const string = 'hello welcome'

// string ='Thank You' //Assignment to constant variable.


//***** Arrow function

// => Arrow function also knowns as fat arrow function, is a simpler
//      and shorter way for defining function in javascript.


const sum =(x, y) =>{
   return x+y
}

let x= 20
let y=30
console.log(sum(x,y))

//******  template Literals

let firstname="divya"
let sarname="mishra"
console.log(`My name is ${firstname} ${sarname}`)


//****** Array Destructuring 
// =>The Array Destructuring makes it easier to extract value from arrays or objets
let name = ['divya','sachin','anita']
let [name1,name2,name3] = name
console.log(name1)


//***** Spread (...) Op
// =>The spread op is used to expand or spread elements 
// =>copying an array
// => merging array

const arr1 = [1,2,3,4]
const arr = [...arr1]
console.log(arr1)

//**** Promises
// =>It provides a structured way to handle asynchronous operation
//   and their outcomes, helping to avoid callback hell and improving code readability

//It mostly use for apis
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is compelete!!")
        resolve()
    },1000)
    
})

//**** classes
// => We can use the class keyword to create a classes and objects
//=> add a constructor() method
// => we can add any number of methods


class animal{
    constructor(fname, age){
        this.fname=fname;
        this.age=age
 }
 eat()
 {
     return `${this.fname} is eating` 
 }
}

let animalObj = new animal('cat',7)
console.log(animalObj.fname)
console.log(animalObj.age)


//****** Default Parameter Values

// Es6 allows function parameters to have default values

const Emp = (x,y=10)=>{
    return x*y
}

console.log(Emp(5,2))

console.log(Emp(5))//it take default value


//****** for..of loop
//=>The for/of  loop allows you to iterate through the iterable items but in a short way

const ForArr = [5,6,7,8,9]
for(let num of ForArr){
    console.log(num)
}


//****** String method 

// startWith()=>this method return true, if the string start with the provided string 
                // otherwise it will return false
                // This method is case-sensitive
                
// endWith()=>this method return true, if the string end with the provided string 
                // otherwise it will return false
                // This method is case-sensitive


// includes()=>this method return true, if the string includes with the provided string 
                // otherwise it will return false
                // This method is case-sensitive

const first_name='divya'
console.log(`${first_name}`.startsWith('d')) //It retrun true
console.log(`${first_name}`.endsWith('v'))//It retrun false => because first_name endwith a 
console.log(`${first_name}`.includes('i'))//It search ('i') if present it will return true










