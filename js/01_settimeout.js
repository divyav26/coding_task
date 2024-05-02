console.log('a')
console.log('b')
setTimeout(()=>{
    console.log('c')
},1000) //It executes after 3 seconds
console.log('d')



// setTimeout =>It is an asynchronous function
// asynchronous => It allows our code to run in the background without blocking 
        //          the execution of other code.
//output
// a
// b 
// d 
// c =>It executes after 3 seconds

