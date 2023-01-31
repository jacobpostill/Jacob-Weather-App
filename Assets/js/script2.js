const cityName = document.getElementById("cityname")
const cityName2 = document.getElementById("cityName2")
const btn = document.getElementById("startBtn")
btn.addEventListener('click', search);
let liveWeatherURL;

function search() {
    event.preventDefault()
    cityName2.innerHTML = cityName.value
    liveWeather();
    fiveDaysURL ()
}



function fiveDaysDisplay() {
    for (let i=1; i< week.length;) {
        $('#date_' + i).text(week[i].dt_txt);
        let icon = "http://openweathermap.org/img/w/" + week[i].weather[0].icon + ".png";
        $('#day_img_' + i).attr('src', icon);
        $('#temp_' + i).text(`Temp: ${week[i].main.temp}°F`);
        $('#wind_' + i).text(`Wind: ${week[i].wind.speed} MPH`);
        $('#hum_3' + i).text(`Humidity: ${week[i].main.humidity}%`);
        i = i + 8;
}}

function fiveDaysURL () {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName.value + "&appid=cd488a486e6222f3039ecabe1a0d648d")
        .then(response => response.json())
        .then(function (fiveDaysData) {
            week = fiveDaysData.list
            fiveDaysDisplay()
        }
)}

function liveWeather () {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName.value + "&appid=cd488a486e6222f3039ecabe1a0d648d")
        .then(response => response.json())
        .then(function (liveData) {
            $('#city').text(liveData.name);
            var weatherIcon = "http://openweathermap.org/img/w/" + liveData.weather[0].icon + ".png";
            $('#image_main').attr('src', weatherIcon);
            $('#temp_main').text("Temperature: " + liveData.main.temp + "°F");
            $('#wind_main').text("Wind Speeds: " + liveData.wind.speed + " MPH");
            $('#humidity_main').text("Humidity: " + liveData.main.humidity + "%");

    })
}
