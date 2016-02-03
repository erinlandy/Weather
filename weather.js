$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h2> <p>The current temperature is: " + data.currently.temperature + " degrees </h2></p>" +
    "<p> It is currently: " + data.currently.summary + "</p>" +
    "<p>The humidity level is - " + data.currently.humidity + "</p>" +
    // "<p>Weather Alert:" + data.alerts[0].description + "</p>" +
    "<p><h2> Your 3-day forecast - </h2></p>" +
    "<p><h3>Tommorrow's Weather </h3></p>" +
    "<p>Temperature (High): " + data.daily.data[0].apparentTemperatureMax + "</p>" +
    "<p>Temperature (Low): " + data.daily.data[0].apparentTemperatureMin + "</p>" +
    "<p>There will be: " + data.daily.data[0].summary + "</p>" +

    "<p><h3>The Day After Tomorrow's Weather </h3></p>" +
    "<p>Temperature (High): " + data.daily.data[1].apparentTemperatureMax + "</p>" +
    "<p>Temperature (Low): " + data.daily.data[1].apparentTemperatureMin + "</p>" +
    "<p>There will be: " + data.daily.data[1].summary + "</p>" +

    "<p><h3>The Third Day's Weather </h3></p>" +
    "<p>Temperature (High): " + data.daily.data[2].apparentTemperatureMax + "</p>" +
    "<p>Temperature (Low): " + data.daily.data[2].apparentTemperatureMin + "</p>" +
    "<p>There will be: " + data.daily.data[2].summary + "</p>"


    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
