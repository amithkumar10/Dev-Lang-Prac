// ===== push & pop =====
let arr1 = [1, 2, 3];

arr1.push(4);        // adds at end
console.log(arr1);  // [1, 2, 3, 4]

arr1.pop();          // removes last element
console.log(arr1);   // [1, 2, 3]


// ===== shift & unshift =====
let arr2 = [10, 20, 30];

arr2.unshift(5);     // adds at beginning
console.log(arr2);   // [5, 10, 20, 30]

arr2.shift();        // removes first element
console.log(arr2);   // [10, 20, 30]


// ===== slice & splice =====
let arr3 = [1, 2, 3, 4, 5];
// Parameters
// startIndex → where to start
// deleteCount → how many elements to remove
// items → elements to insert (optional)

let sliced = arr3.slice(1, 4);   // non-mutating
console.log(sliced);             // [2, 3, 4]
console.log(arr3);               // original unchanged

arr3.splice(2, 1, 99);            // mutates array
console.log(arr3);                // [1, 2, 99, 4, 5]


// ===== concat =====
let a = [1, 2];
let b = [3, 4];

let combined = a.concat(b);
console.log(combined);            // [1, 2, 3, 4]


// ===== includes & indexOf =====
let nums = [10, 20, 30];

console.log(nums.includes(20));   // true
console.log(nums.indexOf(30));    // 2
console.log(nums.indexOf(99));    // -1


// ===== join =====
let words = ["Hello", "World"];

let sentence = words.join(" ");
console.log(sentence);            // "Hello World"


// ===== reverse & fill =====
let arr4 = [1, 2, 3];

arr4.reverse();                   // mutates array
console.log(arr4);                // [3, 2, 1]

let arr5 = [0, 0, 0, 0];
// Parameters
// value → what to put
// startIndex → where to start (optional)
// endIndex → where to stop (not included, optional)

arr5.fill(7, 1, 3);               // fills from index 1 to 2
console.log(arr5);                // [0, 7, 7, 0]
