console.log("This is strings Learning")

// Accessing characters. 
let a = "Sushant";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); 

// Length of An array. 
console.log(a.length);

// Template literals.
let real_name = "Sushant";
let friend = "Pavan";

console.log("His Name is "+real_name+" and his friend name is "+friend);
// use literals
console.log(`His name is ${real_name} and his friend name is ${friend}`);

// Convert lower case to upper case
let b = "shivam";
console.log(b.toUpperCase());
// convert upper case to lower case and This is function 
console.log(b.toLowerCase());
// This is property. 
console.log(b.length);

// Slicing a string 
console.log(b.slice(1,4));
console.log(b.slice(1));

// Replace 
console.log(b.replace("sh","77"))
// Multiple occurrences. can't replace second occurence
let s = "sushantsh"
console.log(s.replace("sh","77"))

// Concatenation
console.log(b.concat(a));
console.log(b.concat(a, "Ujwala","Pavan","priya"));

