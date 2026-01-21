// ===============================
// Basic try–catch
// ===============================
try {
  let x = y + 1; // y is not defined → ReferenceError
} catch (error) {
  console.log(error.message);
}


// ===============================
//  throw (manual error)
// ===============================
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (err) {
  console.log(err.message);
}


// ===============================
// finally block
// ===============================
try {
  console.log("Try block executed");
} catch (e) {
  console.log("Catch block");
} finally {
  console.log("Always runs");
}

