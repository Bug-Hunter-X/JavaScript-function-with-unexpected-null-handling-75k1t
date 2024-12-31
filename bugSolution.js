function foo(a, b) {
  if (a === null || b === null) {
    return null; // Return null if either a or b is null
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null