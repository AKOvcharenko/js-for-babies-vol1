/**
 * TODO: write a function which finds all prime numbers usind eratosthenes algorithm
 * https://pl.wikipedia.org/wiki/Sito_Eratostenesa
 */

const sieve = (n) => {
  const prime = [];

  if ( n >= 2) {
    let numbers = Array.apply(null, {length: n + 1}).map((a, i) => i).slice(2);
    let currentExecuting = 2;

    while (currentExecuting) {
      prime.push(currentExecuting);
      numbers = numbers.filter(num => num % currentExecuting);
      currentExecuting = numbers[0];
    }
  }

  return prime;
};

module.exports = sieve;
