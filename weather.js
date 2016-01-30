$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    // var markup = "The weather report... " + "wilsl be here when I finish my homework.";

    var markup = {
    currently: {
        temperature: "42.24...",
        summary: "Overcast..." }
    }

    var markup = {
    daily: {
        icon: "snow",
        summary: "Mixed precipitation on Tuesday through Saturday, with temperatures falling to 30°F on Thursday.", data: [0,1,2] }
};


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
