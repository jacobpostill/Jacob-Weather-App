const cityName = document.getElementById("cityname")
const cityName2 = document.getElementById("cityName2")
const btn = document.getElementById("startBtn")
btn.addEventListener('click', search);
let liveWeatherURL;

function search() {
    event.preventDefault()
    cityName.innerHTML = cityName.value
    liveWeather();
    fiveDaysURL ()
}


var j = 1
function fiveDaysDisplay() {
    for (let i=1; i< week.length;) {
        $('#date_' + j).text(week[i].dt_txt);
        let icon = "http://openweathermap.org/img/w/" + week[i].weather[0].icon + ".png";
        $('#day_img_' + j).attr('src', icon);
        $('#temp_' + j).text(`Temp: ${week[i].main.temp}°F`);
        $('#wind_' + j).text(`Wind: ${week[i].wind.speed} MPH`);
        $('#hum_' + j).text(`Humidity: ${week[i].main.humidity}%`);
        console.log(j)
        console.log(week.length)
        i = i + 8; 
        j++
    $('fivedaytext').text("Five Day Weather Forecast");
    searchHistory();
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

const searchedCity = document.getElementById("searchedCity")

function searchHistory() {
    let searchbutton = document.createElement("button");
    searchbutton.textContent = cityName.value
    searchedCity.appendChild(searchbutton);
    searchbutton.addEventListener('click', function (event) {
        event.preventDefault()
        cityName.value = searchbutton.textContent
        liveWeather();
        fiveDaysURL ()
    })
}