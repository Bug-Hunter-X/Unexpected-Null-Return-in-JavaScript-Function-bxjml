function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values more gracefully
    // Option 1: Return 0 as default
    // return 0; 

    // Option 2: Throw an error
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Throws Error
console.log(foo(1, null)); // Throws Error
console.log(foo(null, null)); // Throws Error