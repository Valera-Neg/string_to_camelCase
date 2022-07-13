const camelCase = function(input) {
  return input.replace(/\W+(.)/g, function(match, chr)
  {
       return chr.toUpperCase();
   });
}


console.log(camelCase("this is a string")); // => thisIsAString
console.log(camelCase("camel case")); // => camelCase
console.log(camelCase("supercalifragalisticexpialidocious")); // => supercalifragalisticexpialidocious