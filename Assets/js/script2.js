const cityName = document.getElementById("cityname")
const cityName2 = document.getElementById("cityName2")
const btn = document.getElementById("startBtn")
btn.addEventListener('click', search);

function search() {
    cityName2.innerHTML = cityName.value
    liveWeather();
    fiveDaysURL ()
}



function fiveDaysDisplay() {
    for (let i=1; i< week.length;) {
        $('#date_' + i).text(days[i].dt_txt);
        let icon = "http://openweathermap.org/img/w/" + days[i].weather[0].icon + ".png";
        $('#day_img_' + i).attr('src', iconUrl);
        $('#temp_' + i).text(`Temp: ${days[i].main.temp}°F`);
        $('#wind_' + i).text(`Wind: ${days[i].wind.speed} MPH`);
        $('#hum_3' + i).text(`Humidity: ${days[i].main.humidity}%`);
        i = i + 8;
}}

function fiveDaysURL () {
    fetch("api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid=cd488a486e6222f3039ecabe1a0d648d")
        .then(function (weatherFive) {
            return weatherFive.json();
        })
        .then(function (weatherInfo) {
            week = weatherInfo.list;
            fiveDaysDisplay()
        })
}

function liveWeather () {
    fetch("api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=cd488a486e6222f3039ecabe1a0d648d")
        .then(function (liveResponse) {
            return liveResponse.json();
        })
        .then(function (liveData) {
            $('#city').text(liveData.name);
            var weatherIcon = "http://openweathermap.org/img/w/" + liveData.weather[0].icon + ".png";
            $('#image_main').attr('src', weatherIcon);
            $('#temp_main').text(liveData.main.temp + "°F");
            $('#wind_main').text(liveData.wind.speed + " MPH");
            $('#humidity_main').text(liveData.main.humidity + "%");

    })
}
