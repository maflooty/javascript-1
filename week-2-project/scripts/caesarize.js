/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
*/

const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: '^?`A' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },
];
function caesarize(str, shiftNum) {
  // write me!
 
  let result = Array(str.length);
  
  for (let i = 0; i < str.length; i++) {
    
    let code = str.charCodeAt(i);
    
    let lower = "a".charCodeAt(0);
    
    if (code >= lower && code < lower + 26)
    
    code = (code - lower + shiftNum) % 26 + lower;
  
    let upper = "A".charCodeAt(0);
    
    if (code >= upper && code < upper + 26)
    
    code = (code - upper + shiftNum) % 26 + upper;
  
    result[i] = String.fromCharCode(code);
	}
	return result.join("");
}
evaluate(caesarize, caesarizeTests);


function caesarizeHandler() {

  // read and process user input (this works, no need to change it!)
  const strToCaesarize = document.getElementById('caesarize-string-input').value;

  const rawNumInput = document.getElementById('caesarize-number-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const caesarized = caesarize(strToCaesarize,shiftNumber);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('caesarize-output');
  outputField.innerHTML = caesarized;

  console.log('\n--- caesarizeHandler ---');
  console.log('strToCaesarize:', typeof strToCaesarize, ',', strToCaesarize);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('caesarized:', typeof caesarized, ',', caesarized);
};
const caesarizeButton = document.getElementById('caesarize-button');
caesarizeButton.addEventListener('click', caesarizeHandler);
