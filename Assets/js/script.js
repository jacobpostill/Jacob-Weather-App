var userFormEl = document.querySelector('#user-form');
var languageButtonsEl = document.querySelector('#language-buttons');
var nameInputEl = document.querySelector('#username');
var repoContainerEl = document.querySelector('#repos-container');
var repoSearchTerm = document.querySelector('#repo-search-term');

var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a ciity');
  }
};

var buttonClickHandler = function (event) {
  var language = event.target.getAttribute('data-language');

  if (language) {
    getlocation(language);

    repoContainerEl.textContent = '';
  }
};

function currentURL() {
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=2ca1c9e6889192710f3b59dc0b31f2bf';
    console.log(currentUrl)
    fetch(currentUrl)
      .then(function (response1) {
          return response1.json() })
      .then(function (currentUrlInfo) {
        $('#name_of_city').text(currentUrlInfo.name);
        $('#image_main').attr('src', img_main);
        $('#temp_main').text(currentUrlInfo.main.temp + "°F");
        $('#wind_main').text(currentUrlInfo.wind.speed + " MPH");
        $('#humidity_main').text(currentUrlInfo.main.humidity + "%");
        var img_main = "http://openweathermap.org/img/w/" + currentUrlInfo.weather[0].icon + ".png";
    
})}

function getlocation() {
  var apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + place + '&limit=10&appid=2ca1c9e6889192710f3b59dc0b31f2bf';
  console.log(apiUrl)
  fetch(apiUrl)
    .then(function (response) {
        return response.json() })
    then(function (cityInfo) {
        latitude = cityInfo[0].lat;
        longitude = cityInfo[0].lon;
        console.log(latitude);
        console.log(longitude);
        getCurrentWeatherUrl();
        getWeatherUrl();
    })
    .catch(function (error) {
      alert('Unable to connect to city');
    })
    ;
};
