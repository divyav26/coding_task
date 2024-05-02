var arr =[2,4,6,8]
var newArr = arr.map((item,i)=>{
    console.log(item + 'index' + i)
    return item + i
})
console.log(newArr)


// 2 index 0
// 4 index 1
// 6 index 2
// 8 index 3
// [2, 5, 8, 11] It create a new array