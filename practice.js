// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.

// use forEach to iterate over array of numbers, if number divided
// by 5 has no remainder, increment a counter variable by one and return it

// I - Array
// O - Number
// C - Must use _.each
// E - None

// Pseudocode
  // create counter
  // call 'each' function and pass its callback function the element
    // if number divided by five has no remainder, increment counter by one
  // return counter

var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
// return fruit if it passes targetFruit filter test

// I - Array, target value (string?)
// O - Array
// C - must use filter
// E - none

// Filter out items in array that dont pass the truth test
// truth test being if the fruit is equal to the targetFruit or not

// Pseudocode
// call filter on fruits array with current element as argument to callback function and return
  // the fruit should only be included if it is equal to the targetFruit input
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
// filter out all array entries that do not begin with the letter p

// tests already exist for this function

// High Level Strategy - use filter on array, pass in list
// and a callback with current element as argument
// if first character (controlled for case) is equal to letter (controlled for case)
// keep it in array

// Pseudocode
// call filter on fruits array with current element as argument to callback function and return
  // include fruits whose first letter matches the letter input (control for case)

var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit.charAt(0).toLowerCase() === letter.toLowerCase();
  });
};

// return a filtered array containing only cookie-type desserts.
// filter out any dessert that isnt 'cookie'

// I - array
// O - array
// C - must use filter
// E - none

// High Level Strategy - use _.filter to extract only elements in array that are equal to 'cookie'

// Pseudocode
// call filter on desserts array with current element as argument to callback function and return
  // inlude desserts who are equal to 'cookie'

var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
// use 'reduce' function to parse down prices in product list to a total amount

// I - array
// O - integer
// C - must use reduce
// E - none

// High Level Strategy - use reduce function on products list
// pass into it the product array, and a callback function with memo and current element
// callback body should add them together and reset memo value

// Pseudocode
// call reduce on input array with array and callback function (memo, current element) as args
  // return memo +  current element (wrap them in Number NOT parseInt because parseInt rounds)
var sumTotal = function(products) {
  return _.reduce(products, function(memo, currentElement) {
    return Number(memo) + Number(currentElement.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// look through desserts collection and add the type to and object with how many times
// it occurs in input collection as the value

// I - object
// O - object
// C - must use reduce
// E - none

// Tests are already written for this function

// High Level Strategy - create a result object, filter desserts with memo and current element
// in callback function body, check if elements dessert type exists in object
// if it doesnt, add it with value of one, if it does, increment its value by one
// return object

// Pseudocode
// create a variable(eventually object) and set equal to reduce of desserts object
// pass memo and current element into callback function of reduce, set initial value to empty obj
  // check to see if current element exists in memo object
    //if it does, increment it by one
  // check to see if current element doesn't exist in memo object
    //if it doesn't, put it there and set it equal to one
  // return type object
// return result object
var dessertCategories = function(desserts) {
  var totalTypes = _.reduce(desserts, function(types, dessert) {
    if (types[dessert.type] !== undefined) {
      types[dessert.type]++;
    } else {
      types[dessert.type] = 1;
    }
    return types;
  }, {});
  return totalTypes;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// traverse array with reduce to find movies which were made between 1990 and 2000
// and push them to a result array

// I - array
// O - array
// C - Use reduce, no for loop
// E - none

// Tests already exist for this function

// High Level Strategy - traverse the input array with reduce - initial value should be
// an array of objects - check if movie was made between 1990 and 2000, if yes, add
// it to result array

// Pseudocode
// create variable for 90s movies and set equal to reduce of movies array
// in callback function, use year for memo and movie for current element
// initial value (accumulator) should be empty array
  // if movie releaseYear is > 1989 and < 2000
    // push movie title to inner array
  // return inner array
// return array

var ninetiesKid = function(movies) {

  var ninties = _.reduce(movies, function(rightDecade, movie) {
    if (movie.releaseYear > 1989 && movie.releaseYear < 2000) {
      rightDecade.push(movie.title);
    }
    return rightDecade;
  }, []);
  return ninties;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.

// if movie runtime is shorter than timeLimit input, return true, if not, return false

// I - array of objects
// O - Boolean
// C - must use reduce, cant use for loop, chouldnt create new array
// E - none

// Pseudocode
// create isItShortEnough variable and set equal to calling reduce on movies array
// call reduce on movies with a callback function with shortEnough and current movie as argument
// initial value should be false
  // if current movie is shorter than or equal to time limit
    // shortEnough should be true
  // return shortEnough
// return isItShortEnough

var movieNight = function(movies, timeLimit) {
  var isItShortEnough = _.reduce(movies, function(shortEnough, movie) {
    if (movie.runtime <= timeLimit) {
      shortEnough = true;
    }
    return shortEnough;
  }, false);
  return isItShortEnough;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

// uppercase every letter in every fruit

// I - array of strings
// O - array of strings
// C - cant use native map or for loop, cant create new array or return original array
// E - none

// High Level Strategy - map over fruits array and change each fruit to full uppercase

// Pseudocode
// map over fruits array with callback with current element as argument
// and return each fruit uppercased
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) { return fruit.toUpperCase(); });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// add a glutenFree property to objects in an array based on whether or not
// they contain flour

// I - array of objects
// O - array of objects
// C - must use _.map, cant use native map or for loop, cant create new array,
  // shouldnt return original array
// E - none

// High Level Strategy - map over input array of objects, and add a glutenFree property
// set to true or false based on if it has flour or not

// Pseudocode
// map over desserts array, in callback put current dessert as arg
  // if the current desserts ingredients array includes 'flour'
    // create a 'glutenFree' property for that dessert and set it to false
  // if the current desserts ingredients array does not include 'flour'
    // create a 'glutenFree' property for that dessert and set it to true
  // return dessert

var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert['glutenFree'] = false;
    } else {
      dessert['glutenFree'] = true;
    }
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/

// map over groceries array of objects and add a new 'salePrice' property set to
// price after coupon applied rounded to two decimals

// I - array of objects
// O - array of objects
// C - must must _.map, no for loop, no new arrays, no native map
// E - none

// tests are already written for this function

// High Level Strategy - map over array of objects and apply coupon to each elements price
// for each element, create a new property called salePrice and set it equal to
// the value of the elements price AFTER the coupon has been applied, rounded to two decimal places


// Pseudocode
// map over groceries array, use currentItem as argument for callback function
  // in callback body
  // create alias for salePrice and set equal to current item price w/ $ sliced off
  // multiplied by 1 - coupon value -- wrap in Math.round, multiply by 100 then divide by 100
  // to get number rounded to two decimal places
  // if coupon is defined
    // create new property in currentItem called salePrice and set equal to
    // currentItems price times coupon/100 and return
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(currentItem) {
    var salePrice = (Math.round(Number(currentItem.price.slice(1))
    * (1 - coupon) * 100) / 100);
    if (coupon !== undefined) {
      currentItem.salePrice = '$' + salePrice;
    }
    return currentItem;
  });
};
