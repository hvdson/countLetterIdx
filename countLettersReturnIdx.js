/* -
same as countLetters.js but
return all the indices (zero-based positions) in the
string where each character is found

// refactor code to return object with arrays
-----------------------------------------------------*/

const countLetters = function (string) {

  // taken from https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
  // regexp \s finds whitespace - g is global flag (match all \s instances);
  var stringNoSpace = string.replace(/\s/g, '').toLowerCase();

  var letterCount= {};

  // index through string
  for (let i = 0; i < stringNoSpace.length; i++) {

    // refactored to save stringNoSpace[i] -
    var char = stringNoSpace[i];

    // check if key already exists
    if (letterCount[char] === undefined) {
      letterCount[char] = [];
    }

    // create key-value pairs for each letter
    letterCount[char].push(i);
  }

  // return instances of chars in passed string in object
  return letterCount;
};




console.log(countLetters("Lighthouse in"));
// console.log(countLetters("Lighthouse in the house"));
console.log({
  l: [0],
  i: [1,10],
  g: [2],
  h: [3, 5],
  t: [4],
  o: [6],
  u: [7],
  s: [8],
  e: [9],
  n: [11],
});