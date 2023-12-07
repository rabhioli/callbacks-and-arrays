// User
// DRY
// KISS
// Avoid creating a YAGNI
// Do the simplest thing that could possibly work
// Don't make me think
// Write code for the maintainer
// Single responsibility principle
// Avoid premature optimization
// Separation of concerns
// Answer
// DRY (Don't Repeat Yourself): Encourages developers to avoid duplicating code by promoting code reusability and abstraction.

// KISS (Keep It Simple, Stupid): Suggests that systems are more effective when they are kept simple rather than made unnecessarily complex.

// YAGNI (You Ain't Gonna Need It): Advises against adding functionality until it is necessary, to avoid wasting time on features that may not be used.

// Do the simplest thing that could possibly work: Encourages simplicity in solution design by advocating for the most straightforward and minimalistic approach that fulfills the immediate requirements.

// Don't make me think: Stresses the importance of creating intuitive and user-friendly designs that require minimal cognitive effort from users.

// Write code for the maintainer: Emphasizes the importance of writing clear, well-documented code that is easy for others (or yourself in the future) to understand and maintain.

// Single responsibility principle: Advocates for a class or module to have only one reason to change, promoting maintainability by ensuring each component has a clear and distinct purpose.

// Avoid premature optimization: Encourages developers to focus on optimizing code only when performance issues arise, rather than trying to optimize every part of the code from the beginning.

// Separation of concerns: Advises dividing a program into distinct sections, each addressing a separate concern or responsibility, to enhance modularity and maintainability.

// Define a function 'f' that takes a parameter 'l'
const f = l => {
    // Initialize variables: 'es' for even sum, 'p' for previous, 'c' for current, and 'n' for next
    let es = 0, p = 0, c = 1, n = 0;
  
    // Use a while loop to iterate as long as 'c' is less than or equal to the input 'l'
    while (c <= l) {
      // Calculate the next Fibonacci number and update 'n'
      n = c + p;
      
      // Swap values of 'c' and 'p' to prepare for the next iteration
      [c, p] = [n, c];
  
      // Add 'c' to 'es' if 'c' is an even number
      es += (c % 2 === 0) ? c : 0;
    }
  
    // Return the sum of even Fibonacci numbers up to 'l'
    return es;
  }
  
  // Call the function with an input of 55 and log the result to the console
  console.log(f(55));
  
// Function with semantic variable names for calculating the sum of even Fibonacci numbers up to a given limit
const sumEvenFibonacci = (limit) => {
    let evenSum = 0;       // Variable to store the sum of even Fibonacci numbers
    let previous = 0;      // Variable to store the previous Fibonacci number
    let current = 1;       // Variable to store the current Fibonacci number
  
    // Iterate while the current Fibonacci number is less than or equal to the specified limit
    while (current <= limit) {
      let next = current + previous;  // Calculate the next Fibonacci number
      previous = current;             // Update the 'previous' for the next iteration
      current = next;                 // Update the 'current' for the next iteration
  
      // If the current Fibonacci number is even, add it to the 'evenSum'
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
  
    // Return the sum of even Fibonacci numbers up to the specified limit
    return evenSum;
  }
  
  // Call the function with an input of 55 and log the result to the console
  console.log(sumEvenFibonacci(55));
//   The semi-colon on the fourth line is not necessary in JavaScript. JavaScript can automatically insert semi-colons at the end of lines if they are missing. Removing the semi-colon won't affect the code's functionality.
  