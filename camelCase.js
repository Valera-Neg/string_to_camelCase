  const camelCase = function(input) {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }


console.log(camelCase("this is a string")); // => thisIsAString
console.log(camelCase("camel case")); // => camelCase
console.log(camelCase("supercalifragalisticexpialidocious")); // => supercalifragalisticexpialidocious
