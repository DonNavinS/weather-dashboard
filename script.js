var inputEl = document.querySelector("#input")
var buttonEl = document.querySelector("#button")
var citiesListEl = document.querySelector("#cities-list")
var cityNameEl = document.querySelector("#selected-city")
var tempEl = document.querySelector("#temperature")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var UVIndexEl = document.querySelector("#UV-index")


var cityHistory1;
var cityHistory2;
var cityHistory3;
var cityHistory4;
var cityHistory5;






buttonEl.addEventListener("click", function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputEl.value + '&appid=5f2d5d2083093f3a5669fa9be777a716')

    .then(response => response.json())
    .then(data => { 
        var cityLongitude = data['coord']['lon'];
        var cityLatitude = data['coord']['lat'];
        var cityName = data['name'];
        cityNameEl.innerHTML = "Today's Forecast in " + cityName;


        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLatitude +'&lon=' +cityLongitude+ '&exclude=daily,hourly,minutely,alerts&appid=5f2d5d2083093f3a5669fa9be777a716')

        .then(response =>response.json())
        .then(data => {
            
            var cityTemp = Math.floor(data['current']['temp'] -273);
            var cityWind = data['current']['wind_speed'];
            var cityHumidity = data['current']['humidity']
            var cityUV = data['current']['uvi']


            tempEl.innerHTML = 'Temperature = ' + cityTemp +'°'
            windEl.innerHTML = 'Wind Speed = ' + cityWind + 'km/h'
            humidityEl.innerHTML = 'Humidity = ' + cityHumidity +'%'
            UVIndexEl.innerHTML = 'UV Index = ' + cityUV

            console.log(data)
        })
        

    })
})


buttonEl.addEventListener("click", function() {


    if (cityHistory1 == undefined && inputEl.value !== "") {
        cityHistory1 = document.createElement("button");
        cityHistory1.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory1);



   
    } else if (cityHistory2 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== "") {
    cityHistory2 = document.createElement("button");
    cityHistory2.innerHTML = inputEl.value
    citiesListEl.appendChild(cityHistory2)


    } else if (cityHistory3 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML && inputEl.value !== "") {
        cityHistory3 = document.createElement("button");
        cityHistory3.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory3)

    } else if (cityHistory4 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML && inputEl.value !== cityHistory3.innerHTML && inputEl.value !== "") {
        cityHistory4 = document.createElement("button");
        cityHistory4.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory4)
    } else if (cityHistory5 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML && inputEl.value !== cityHistory3.innerHTML && inputEl.value !== cityHistory4.innerHTML && inputEl.value !== "") {
        cityHistory5 = document.createElement("button");
        cityHistory5.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory5)
    }

    inputEl.value='';

    
cityHistory1.addEventListener('click', function(){
    location.reload()
})

})

