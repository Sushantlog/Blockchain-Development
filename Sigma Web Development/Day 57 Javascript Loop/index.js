console.log("I am a tutorial on Loop");

// for loop
// let a = 1;

// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }

// for in loop

// create an object

let obj = {
    name : "Sushant",
    role : "Programmer",
    company : "SP"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key , element)
    // only get key value
    console.log(key);
}

// for of

for (const c of "Sushant") {
    console.log(c);
}

// While

// let i = 0;
// while (i<6) {
//     console.log(i);
//     i++
// }

// do while loop

let i = 10;
do {
    console.log(i);
    i++
} while (i<6);
