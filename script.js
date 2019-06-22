// 1. Today's weather
// In your JavaScript file, instantiate and assign the following variables with information about the current weather:
// temperature should hold a number representing the current temperature in Fahrenheit
// conditions should hold a string about the current weather conditions (i.e. "cloudy", "sunny", etc).
// sunriseTime should hold a string representing what time the sun rose this morning
// sunsetTime should hold a string representing what time the sun will set this evening
// Log each variable to the console.
// Use string template literals to combine these variables into a sentence about the weather. (Example:"It's currently sunny and 55 degrees. The sun rose this morning at 7:34 AM and will set at 5:09 PM.")



// var temperature = 74
// var conditions = "partly cloudy"
// var sunriseTime = "6:07am"
// var sunsetTime = "8:57pm"
// weatherReport = `It's currently ${conditions} and ${temperature} degrees. The sun rose this morning at ${sunriseTime} and will set at ${sunsetTime} this evening.`

// console.log(temperature);
// console.log(conditions);
// console.log(sunriseTime);
// console.log(sunsetTime);

// console.log(weatherReport);





// 2. Weather Data
// In your JavaScript file, copy and paste the following array:

// var highTemps = [55, 57, 53, 47, 56, 50];
// var highSum = highTemps[0] + highTemps[1] + highTemps[2] + highTemps[3] + highTemps [4] + highTemps [5];
// var highAverage = highSum / highTemps.length;


// var lowTemps = [33, 30, 29, 35, 31, 32]; 
// var lowSum = lowTemps[0] + lowTemps [1] + lowTemps[2] + lowTemps[3] + lowTemps[4] + lowTemps[5];
// var lowAverage = lowSum / lowTemps.length;


// // Print the first high temperature to the console.
// // Print the last low temperature to the console.
// // What is the average high temperature from the data set?
// // What is the average low temperature from the data set?

// console.log(highTemps [0]);
// console.log(lowTemps [5]);
// console.log(highAverage);
// console.log(lowAverage);





// 3. Weather Object
// In your JavaScript file, create an object that represents the current weather. Your can reuse your data from the first exercise. Your object should have the following properties:

// temperature
// conditions
// Log the current temperature to the console.

// Use string template literals to log a sentence about the weather console. (Example: "It's 64 degrees F and sunny.")

// var currentObject = {
//     temperature: 74,
//     conditions: "partly cloudy",
// }

// var temperature = 74;
// var conditions = "partly cloudy";
// currentWeather = `It's ${temperature} degrees F and ${conditions}.`


// console.log(currentObject);
// console.log(currentWeather);







// 4. Nested Weather Objects
// Refactor your weather object to include today's high and low temperature and sunrise/ sunset times. Now your object should look something like this:


// Log today's high temperature to the console.
// Log today's low temperature to the console.
// Log today's conditions to the console.
// Log today's sunrise time to the console.
// Use string template literals to create a more detailed description of today's weather.

// var currentObject = {
//     temperature: {
//       high: 77,
//       low: 62
//     },
//     conditions: "partly cloudy",
//     astronomy: {
//       sunrise: "6:07 AM",
//       sunset: "8:57 PM"
//     }
//   }

// todaysConditions = `There will be a high of ${currentObject.temperature.high} and a low of ${currentObject.temperature.low} today. Conditions for the most part will be ${currentObject.conditions}. This morning's sunrise will be at ${currentObject.astronomy.sunrise} and sunset will be at ${currentObject.astronomy.sunrise} .`

//   console.log(currentObject.temperature.high);
//   console.log(currentObject.temperature.low);
//   console.log(currentObject.conditions);
//   console.log(currentObject.astronomy.sunrise);
//   console.log(todaysConditions);







// 5. Weather Forecast
// Copy and paste the following array into your JavaScript file


// Log today's weather conditions to the console.
// Log Saturday's high temperature to the console.
// Log Saturday's sunrise time to the console.
// Log Sunday's conditions to the console.
// Log Sunday's sunset time to the console.
// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")


var weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]
   











