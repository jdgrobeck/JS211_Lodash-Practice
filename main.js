'use strict';
const _ = require('lodash');
const assert = require('assert');


// Use fake data or APIs you have worked with in previous projects or google fake data you can use. - [ ] Either make a fetch or save it in a few variables.

const numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72];

// Console.log the output of each lodash method called on the fake data.
// Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().

//Crete variable that chunks numbers array into 3 new arrays of 3

const chunkedNumbers = _.chunk(numbers, 3)


//console.log chunkedNumbers
console.log(chunkedNumbers);

//Create variable that reverses numbers array

const reversedNumbers = _.reverse(numbers);

//console log reversedNumbers
console.log(reversedNumbers);

//Create variable that returs numbers without 16, 32, 48, 64

const withoutNumbers = _.without(numbers, 16, 32, 48, 64);

// console.log withoutNumbers. Numbers remained reversed from reversedNumbers
console.log(withoutNumbers);

//Create variable that shuffles numbers
const shuffledNumbers = _.shuffle(numbers);

console.log(shuffledNumbers)

// Create unit tests with Mocha for each function you build.

//Test code from Mission to Mars
if (typeof describe === 'function'){
    describe('lodash tests', function(){
        // Chunk test
      it('Should return three arrays of 3', function(){
        const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const chunkedNumbers1 = _.chunk(numbers1, 3)
        assert.equal(chunkedNumbers1[0].length, 3);
        assert.equal(chunkedNumbers1[1].length, 3);
        assert.equal(chunkedNumbers1[2].length, 3);
        
      });

      // Reverse test
      it('First index should switch places with last index', function(){
        const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const reversedNumbers1 = _.reverse(numbers1)
        assert.equal(reversedNumbers1[0], 9);
        assert.equal(reversedNumbers1[8], 1);
        
      });

      //Without test
      it('Array should not have 2, 4, 6 or 8', function(){
        const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const withoutNumbers1 = _.without(numbers1, 2, 4, 6, 8);
        assert.equal(withoutNumbers1[0], 1);
        assert.equal(withoutNumbers1[1], 3);
        assert.equal(withoutNumbers1[2], 5);
        assert.equal(withoutNumbers1[3], 7);
        assert.equal(withoutNumbers1[4], 9);
        assert.equal(withoutNumbers1.length, 5);
        
        
      });

      //Shuffle test
      it('1 should not be in index 0', function(){
        const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const shuffledNumbers1 = _.shuffle(numbers1);
        assert.notEqual(shuffledNumbers1[0], 1);
        
        
        
      });
      

})
}


// Link to GCD Repl: https://replit.com/@jdgrobeck/GCD-Recursion#index.js




