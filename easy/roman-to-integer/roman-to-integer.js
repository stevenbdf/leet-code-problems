/**
 * 
 * Leet Code link: https://leetcode.com/problems/roman-to-integer/
 * 
 * Test Cases
 * 
 * Inputs -> Outputs 
 * - "III" -> 3
 * - "LVIII" -> 58
 * - "MCMXCIV" -> 1994
 */

const symbolsValuesMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const substraendSymbolsMap = {
  'I': ['V', 'X'],
  'X': ['L', 'C'],
  'C': ['D', 'M']
};


/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  const letters = s.split('');
  
  let result = 0, pointer = 0;
  
  while (pointer < letters.length) {
      const letter = letters[pointer]
      
      const nextLetter = letters[pointer + 1];
      
      // Check if current letter is a substraend symbol
      if (Object.keys(substraendSymbolsMap).includes(letter)) {

          // Check if next letter is a minuend symbol of current letter
          if (nextLetter && substraendSymbolsMap[letter].includes(nextLetter)) {
              // Substract substraend to the minuend 
              result += (symbolsValuesMap[nextLetter] - symbolsValuesMap[letter]);

              pointer += 2;
              continue;
          }
      }
      
      result += symbolsValuesMap[letter]
      pointer += 1;
  }
  
  return result;
};