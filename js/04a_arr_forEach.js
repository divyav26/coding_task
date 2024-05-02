
var arr =[1,2,3,4,5]
var newArr = arr.forEach((item,i)=>{
    console.log(item + 'index'+i)
    return item + i
})
console.log(newArr)

// ForEach method does not return a new array
//Return value =>undefined

// output
// 1 index 0
// 4 2index 1
// 3 index 2
// 4 4index 3
// 5 index 4
//  undefined