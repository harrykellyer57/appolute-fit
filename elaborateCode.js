/* filename: elaborateCode.js */

// Define a class for generating a Fibonacci sequence
class FibonacciSequence {
  constructor(size) {
    this.size = size;
    this.sequence = [];
  }

  generateSequence() {
    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < this.size; i++) {
      this.sequence.push(num1);
      const temp = num1 + num2;
      num1 = num2;
      num2 = temp;
    }
  }
}

// Define a class for calculating prime numbers
class PrimeCalculator {
  constructor(limit) {
    this.limit = limit;
    this.primes = [];
  }

  checkPrimeNumber(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  calculatePrimes() {
    let counter = 0;
    let num = 2;

    while (counter < this.limit) {
      if (this.checkPrimeNumber(num)) {
        this.primes.push(num);
        counter++;
      }

      num++;
    }
  }
}

// Generate Fibonacci sequence of size 10
const fibonacciSequence = new FibonacciSequence(10);
fibonacciSequence.generateSequence();

// Calculate first 20 prime numbers
const primeCalculator = new PrimeCalculator(20);
primeCalculator.calculatePrimes();

// Output the results
console.log("Fibonacci Sequence:");
console.log(fibonacciSequence.sequence);

console.log("Prime Numbers:");
console.log(primeCalculator.primes);

// ...continuing with other complex operations and logic...