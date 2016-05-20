$(document).ready(function(){
  $('#testbut').click(function(){
    var x = $('#name_var').val();
    var y = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="+x+"&APPID=45e068833bdcfc8124f79fb988b69ed7";
    $.ajax({
      url: y,
    }).then(function(data)
    {
      $('.test').append("<p>" + "The weather in " + x + " is " + data.weather[0].main + " with " + data.weather[0].description +"</p>" + "<br/>" + "Temperature: " + data.main.temp + " degrees");
      console.log(data.main.temp);
    });
  });
});
