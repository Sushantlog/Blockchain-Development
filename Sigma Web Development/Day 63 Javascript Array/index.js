let  arr = [1,4,5,3,9 ]

    // index = 0,1,2,3,4
arr[0]=5666;
console.log(arr,typeof arr)
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// convert array into string 
console.log(arr.toString())
console.log(arr.join(" And "))

// return poped Element
console.log(arr.pop())

arr.push(55);
console.log(arr);

arr.push("Sushant")
console.log(arr)

// This will remove first element 
arr.shift()
console.log(arr);

// this will adds in the beginning 
arr.unshift("jack")
console.log(arr)

// delete



// -------

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

let con = a1.concat(a2,a3)
console.log(con);

// This will sort the entire array
arr.sort()
console.log(arr)

// ---------------------

const num = [1,2,3,4]

console.log(num.slice(2))
// not include 3 index number
console.log(num.slice(1,3))

// ---------------

console.log(num.reverse());