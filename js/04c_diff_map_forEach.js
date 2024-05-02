//What is the main difference between forEach and map function

//forEach method
// =>It is used when you want to perfotm some operration on each element of
// an array without creating a new array

let num = [1,2,3,5]
num.forEach((n)=>{
    console.log(n*2)
})
console.log(num)//It Cannot Change original array 



let arr = [2,4,5,7]
let newAray = arr.forEach((i)=>{
    console.log(i*2)
})

console.log(newAray)// it showing undefined 
//ForEach method does not return a new array
//It not modified original array
let forarr = arr.forEach((i)=>{
    return i*i
}).filter((i)=>{
    if (i > 10){
        return  i
    }
})
console.log(forarr)

//ForEach Method is not chainable
//we cannot use any method because their return value is undefined




// ****map
//Map method
// =>It is used when you want to perfotm some operration on each element of
// an array with creating a new array

let arrMap = [1,2,3,4,6]
let newMap = arrMap.map((i)=>{
    console.log(i*3)
})
// it create a new array

let res = arrMap.map((i)=>{
    return i*i
}).filter((i)=>{
    if (i > 10){
        return  i
    }
})
console.log(res)
//Map Method is chainable 
// we can use sort,filter,reduce,find and so on.