console.log('a')
console.log('b')
setTimeout(()=>{
    console.log('c')
},1000)

setTimeout(()=>{
    console.log('d')
},0)

console.log('e')

// output 
// a 
// b 
// e 
// d =>It executes after 0 seconds
// c =>It executes after 1 seconds

