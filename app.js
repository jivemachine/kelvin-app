// constant variable named kelvin with the current temperature in degrees kelvin
const kelvin = 279;
// Converting the temperature in kelvin to celsius
let celsius = kelvin - 273;
// converting celsius into farenheit
let farenheit = celsius * (9/5) + 32;
// rounding down the temperature to the nearest decimal point
farenheit = Math.floor(farenheit);
// converting celsius into newton scale
let newton = celsius * (33/100);
// rounding newton down to the newrwt decimal
newton = Math.floor(newton);
// printing our results on the console
console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);