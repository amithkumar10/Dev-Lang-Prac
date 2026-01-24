var id = 5;
console.log("ID is: " + id);
var username = "John Doe";
console.log("Username is: " + username);
var isPublished = true;
console.log("Is Published: " + isPublished);
var x = "Hello";
console.log("X is: " + x);
x = 5;
console.log("X is now: " + x + "--no error because of any type");
var age = [21, 34, 55];
console.log("Ages are: " + age);
// Tuple
var person = [1, "Amith", true];
console.log(person);
// Tuple Array
var employee = [[1, "John"], [2, "Jane"], [3, "Doe"]];
console.log(employee);
// Union
var pid = 22;
console.log("PID is: " + pid);
pid = "AB22";
console.log("PID is now: " + pid);
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Direction Up: " + Direction1.Up);
console.log("Direction Down: " + Direction1.Down);
console.log("Direction Left: " + Direction1.Left);
console.log("Direction Right: " + Direction1.Right);
