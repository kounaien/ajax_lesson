$(function(){
    $('#btn').on('click', function(){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "a88522f2a842052a157182e6e7a0aa44",
            dataType : 'jsonp',
        }).done(function(data){
            //通信成功
            $('#place').text(data.name);
            $('#temp_max').text(data.main.temp_max);
            $('#temp_min').text(data.main.temp_min);
            $('#humidity').text(data.humidity);
            $('#speed').text(data.wind.speed);
            $('#weather').text(data.weather[0].main);
            $('img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        }).fail(function(data){
            //通信失敗
            alert('通信に失敗しました');
        });
    });
});