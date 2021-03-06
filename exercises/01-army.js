/**
 * TODO: write a function makeArmy,  which creates army - array of 'solders'(array of functions).
 * each solder(function) can say his position in this army - `my number is ${position}`;
 *
 *
 * usage example
 * let army = makeArmy();
 * army[1]() -> // my number is 1
 * army[5]() -> // my number is 5
 */

const makeArmy = () => {

  var solders = [];

  for (let i = 0; i < 10; i++) {
    solders.push(() => `my number is ${i}`);
  }

  return solders;
};


module.exports = makeArmy;
