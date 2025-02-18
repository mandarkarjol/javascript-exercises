const convertToCelsius = function(tempInF) {
  //(0°F − 32) × 5/9 = -17.78°C [Formula to convert °F to °C]
  const tempInC = Math.round(((tempInF - 32) * (5 / 9)) * 10) / 10;
  return tempInC;
};

const convertToFahrenheit = function(tempInC) {
  // (0°C × 9/5) + 32 [Formula to convert °C to °F]
  const tempInF = Math.round(((tempInC * (9 / 5) + 32)) * 10) / 10;
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
