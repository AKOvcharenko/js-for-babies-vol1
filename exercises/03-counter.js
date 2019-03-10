/**
 * TODO: write a function which counts how much times it has been called
 *
 * counter() -> `you called me 1 time`
 * counter() -> `you called me 2 times`
 * counter() -> `you called me 3 times`
 */

const counter = (() => {
  let n = 0;
  return () => {
    n += 1;
    return `you called me ${n} time${n > 1 ? 's' : ''}`;
  }
})();

module.exports = counter;
