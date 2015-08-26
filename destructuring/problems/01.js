/* Below, an object has been altered in the standard way
using Es5 please re-create this using Es6 destructuring*\

var obj = {
  cars: {
    german: {
      flashy: 'bmw',
      boring: 'beatle'
    },
  },
  animals: {
    mamal: {
      big: 'whale',
      small: 'mouse'
    },
    fish: {
      small: 'gold fish',
      large: ''
    }
  }
};

obj.cars.german.flashy = 'mercedes';

obj.animals.fish.large = 'shark'

console.log(obj)
