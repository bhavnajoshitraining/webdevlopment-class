// let institute = "HashMatics";

// function showInstitute() {
//     console.log(institute);
// }

// showInstitute();
// console.log(institute);

// sayHello();


// function sayHello() {
//     console.log("Hello!");
//     console.log(a)
// }

// var a=10



function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//form validation and closure


