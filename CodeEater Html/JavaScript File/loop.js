const arr =[10,20,30,40]
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}

const mappedArray = arr.map((Element)=>{
    return Element * 2;
})
console.log(mappedArray);