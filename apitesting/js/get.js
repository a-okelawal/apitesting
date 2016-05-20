$(document).ready(function(){
  $('#testbut').click(function(){
    var x = $('#name_var').val();
    var y = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="+x+"&APPID=45e068833bdcfc8124f79fb988b69ed7";
    $.ajax({
      url: y,
    }).then(function(data)
    {
      $('.test').append("<p>" + "The weather in the state " + data.name + ", located in " + x + ", is: " + "<br/>" + "Decription: " + data.weather[0].main + " with " + data.weather[0].description + "<br/>" + "Temperature: Min - " + data.main.temp_min + "degrees" + " and Max - " + data.main.temp_max + "degrees" + "</br>" + "Wind: " + data.wind.speed + "km/s"  + "</p>");
      console.log(data.main.temp);
    });
  });
});

$(document).ready(function(){
  $('#testclear').click(function(){
    $('.test').empty();
  });
});
