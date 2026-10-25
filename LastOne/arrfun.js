
let arr = [10, 30,20, 30, 40,30, 50,30];

console.log("Original Array:", arr);

arr.push(60);
console.log("push:", arr);

arr.pop();
console.log("pop:", arr);

arr.unshift(5);
console.log("unshift:", arr);

arr.shift();
console.log("shift:", arr);

console.log("length:", arr.length);
console.log("at:", arr.at(2));
console.log("indexOf:", arr.indexOf(30));
console.log("lastIndexOf:", arr.lastIndexOf(30));
console.log("includes:", arr.includes(20));

console.log("slice:", arr.slice(1, 4));

arr.splice(1, 2);
console.log("splice:", arr);

console.log("join:", arr.join(" - "));
console.log("toString:", arr.toString());

console.log("find:", arr.find(n => n > 35));
console.log("findIndex:", arr.findIndex(n => n > 25));
console.log("findLast:", arr.findLast(n => n > 25));
console.log("findLastIndex:", arr.findLastIndex(n => n > 25));
/////---------------------------done till here---------------------------------------------------
// arr.forEach(n => console.log("forEach:", n));

// console.log("map:", arr.map(n => n * 2));
// console.log("flatMap:", arr.flatMap(n => [n, n * 2]));

// console.log("filter:", arr.filter(n => n > 25));

// console.log("some:", arr.some(n => n > 40));
// console.log("every:", arr.every(n => n > 0));


// console.log("reduce sum:", arr.reduce((sum, n) => sum + n, 0));
// console.log("reduceRight:", arr.reduceRight((sum, n) => sum + n, 0));

// let nums = [40, 10, 30, 5, 20];

// console.log("sort ascending:", [...nums].sort((a, b) => a - b));
// console.log("sort descending:", [...nums].sort((a, b) => b - a));

// console.log("toSorted:", nums.toSorted((a, b) => a - b));
// console.log("Original nums:", nums);

// console.log("reverse:", [...arr].reverse());
// console.log("toReversed:", arr.toReversed());
// console.log("concat:", arr.concat([60, 70]));

// let nested = [1, [2, 3], [4, [5, 6]]];

// console.log("flat:", nested.flat());
// console.log("flat depth 2:", nested.flat(2));

// let copyArr = [1, 2, 3, 4, 5];
// console.log("copyWithin:", copyArr.copyWithin(0, 3));

// let fillArr = [1, 2, 3, 4, 5];
// console.log("fill:", fillArr.fill(0, 1, 4));

// console.log("Array.isArray:", Array.isArray(arr));
// console.log("Array.from:", Array.from("HELLO"));
// console.log("Array.of:", Array.of(10, 20, 30));

// let values = [10, 20, 30, 40, 50];

// console.log("with:", values.with(1, 99));
// console.log("Original values:", values);

// console.log("keys:", [...arr.keys()]);
// console.log("values:", [...arr.values()]);
// console.log("entries:", [...arr.entries()]);

// console.log("toSpliced:", arr.toSpliced(1, 2, 99, 100));
// console.log("Original arr:", arr);
