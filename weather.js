$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "<h2> <p>The current temperature is: " + data.currently.temperature + " degrees </h2></p>" +
    "<p><h2> It is currently: " + data.currently.summary + "</h2></p>" +
    // "<p>Weather Alert:" + data.alerts[0].description + "</p>" +
    "<p><h2> Your 3-day forecast - </h2></p>" +
    "<p><h3>Tommorrow's Weather </h3></p>" + 
    "Temperature: " + data.daily.data[0].apparentTemperatureMax + "</p>"

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
