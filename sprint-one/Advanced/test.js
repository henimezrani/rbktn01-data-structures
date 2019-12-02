var stack = new Stack();
var arr = Array.from(new Array(5), (v,i) => Math.floor(Math.random() * 500) + 1);

console.table(arr);

arr.forEach( x => stack.push(x))
console.log(stack.pop())