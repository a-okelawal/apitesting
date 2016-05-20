$(document).ready(function(){
  $('#testbut').click(function(){
    var x = $('#name_var').val();
    var y = "http://api.openweathermap.org/data/2.5/weather?q="+x+"&APPID=45e068833bdcfc8124f79fb988b69ed7";
    $.ajax({
      url: y,
    }).then(function(data)
    {
      $('.test').append("<p>" + data.weather[0].main + "</p>");
    });
  });
});
