
let id:number = 5;
console.log("ID is: "+ id);

let username:string = "John Doe";
console.log("Username is: "+ username);

let isPublished: boolean = true;
console.log("Is Published: "+ isPublished);

let x: any = "Hello";
console.log("X is: "+ x);
x = 5;
console.log("X is now: "+ x +"--no error because of any type");

let age: number[] = [21, 34, 55]
console.log("Ages are: "+ age);


// Tuple
let person: [number, string, boolean] = [1, "Amith", true];

console.log(person)

// Tuple Array
let employee: [number, string][] = [[1, "John"], [2, "Jane"], [3, "Doe"]];
console.log(employee);

// Union
let pid: string | number = 22;
console.log("PID is: "+ pid);   
pid = "AB22";
console.log("PID is now: "+ pid);

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log("Direction Up: "+ Direction1.Up);
console.log("Direction Down: "+ Direction1.Down);    
console.log("Direction Left: "+ Direction1.Left);           
console.log("Direction Right: "+ Direction1.Right);

