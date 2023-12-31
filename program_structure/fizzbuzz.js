/*
“Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).”
*/

// 1. Use a For loop to iterate 100 times
for (let i = 1; i < 101; i++) {
  // 2. Write a conditional that prints "Fizz" for numbers divisible by 3 instead of the number
  // a conditional that prints "Buzz" for numbers divisible by 5 (and not 3)
  if (i % 3 == 0 && i % 5 == 0) {
    // 3. Add a conditional that prints "FizzBuzz" if the number is divisble by both 3 and 5;
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fuzz");
  } else {
    console.log(i);
  }
}
