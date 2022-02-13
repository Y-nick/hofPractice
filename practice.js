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
var multiplesOfFive = function(numbers) {
//I takes in array of nums
//O element in question from the array
//C
//E
  //has a result
  var result = 0;
  // each element passed above, (single number, index, arr)
  _.each(numbers, function(thisNum, index, arr) {
    if (thisNum % 5 === 0) {
      result += 1;
    }
  });
  return result;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
//_.filter(list, predicate, [context])
// fitler takes list, and then a function that you define....
  //I array of fruits
  //O returns and array with specific fruit
  return _.filter(fruits, function(thisFruit) {
    return thisFruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits

// starting with the letter 'P'.
var startsWith = function(fruits, letter) {

  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(thisOne) {
    return thisOne === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(total, num, index, array) {
    var result = products[index].price.slice(1);
    return total + Number(result);
  }, 0);


};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {

  return _.reduce(desserts, function(dessertAccum, num, index, arr) {
    var desType = desserts[index]['type'];
    if (dessertAccum[desType] === undefined) {
      dessertAccum[desType] = 1;
    } else {
      dessertAccum[desType] ++;
    }
    return dessertAccum;
  }, {});

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  //I array of movies
  //O return array of the movies that came out in 90s
  //c dont create external arr
  //e
  var oldies = [];
  var movieResult = _.reduce(movies, function(accum, thisMov, index, arr) {
    if (movies[index].releaseYear >= 1990 && movies[index].releaseYear <= 2000) {
      oldies.push(thisMov.title);
    }
  });
  return oldies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  /*Look closely at your statements and figure out when you want your statement to
  run versus when you want the supplied statement to run. */

  // if (movies.length === 0) {
  //   return true;
  // }

  var daTime = _.reduce(movies, function(accum, thisItem, index, arr) {

    if (thisItem.runtime >= timeLimit) {
      //console.log('top ', timeLimit);
      return !!(thisItem.runtime >= timeLimit);
    }
    if (thisItem.runtime <= timeLimit) {
      //console.log('bottom ', timeLimit);
      return !!(thisItem.runtime <= timeLimit);
    }

  }, true);

  if (movies[0].runtime > timeLimit) {
    return false;
  }
  return daTime;




};


/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  //map returns a new arr of values
  var turnUpFruit = _.map(fruits, function(value, index, list) {
    return value.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(value, key, list) {
    var result = {};
    //console.log(desserts[key].ingredients.indexOf('flour'), desserts[key].ingredients);
    if (desserts[key].ingredients.indexOf('flour') === -1) {
      desserts[key]['glutenFree'] = true;
      return desserts[key];
    } else {
      if (desserts[key].ingredients.indexOf('flour') !== -1) {
        desserts[key]['glutenFree'] = false;
        return desserts[key];
      }
    }
    return result;
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
var applyCoupon = function(groceries, coupon) {

  var calculate = _.map(groceries, function(obj, key, list) {
    var price = Math.round(100 * parseFloat(groceries[key].price.replace(/[$,]/g, '')));
    var discount = price * coupon;
    var discountedCents = Math.round(((price - discount) * 100) / 100 );
    obj['salePrice'] = '$' + discountedCents / 100;

    console.log(obj);
    return obj;
  });

  return calculate;
};
