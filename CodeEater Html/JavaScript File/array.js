const arrC = [10,20,30];
let arrL = [1,2,3];

arrC[0] = 4;
// arrC = [12,24,36]; this will give a error
console.log(arrC);
arrL[1] = 5;
console.log(arrL);
arrL = [1,2,3];
console.log(arrL);


// Output =
// [ 4, 20, 30 ]
// [ 1, 5, 3 ]
// [ 1, 2, 3 ]