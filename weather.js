$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather report... " + "wilsl be here when I finish my homework.";

    var markup =  {temperature: "37.67", summary:"Mostly Cloudy", icon:"partly-cloudy-night"};
    data[markup.temperature]

//     var markup = {
//     currently: {
//         temperature: "37.67",
//         icon: "partly-cloudy-night",
//         summary: "Partly Cloudy" }
//     daily:[0,1,2,3,4,5,6,7]
//         }
//
// var data = "It is currently {{currently}}. The extended forecast is {daily: [0,1,2,3]}";
//
// var result = Mark.up(template, context);

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
