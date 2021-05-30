var inputEl = document.querySelector("#input")
var buttonEl = document.querySelector("#button")
var citiesListEl = document.querySelector("#cities-list")
var cityNameEl = document.querySelector("#selected-city")
var fiveDayForecastEl = document.querySelector("#five-day-forecast")
var tempEl = document.querySelector("#temperature")
var windEl = document.querySelector("#wind")
var humidityEl = document.querySelector("#humidity")
var UVIndexEl = document.querySelector("#UV-index")
var cardOneEl = document.querySelector("#card-one")
var cardTwoEl = document.querySelector("#card-two")
var cardThreeEl = document.querySelector("#card-three")
var cardFourEl = document.querySelector("#card-four")
var cardFiveEl = document.querySelector("#card-five")
var cardOneTempEl = document.querySelector("#card-one-temp")
var cardOneWindEl = document.querySelector("#card-one-wind")
var cardOneHumEl = document.querySelector("#card-one-hum")
var cardTwoTempEl = document.querySelector("#card-two-temp")
var cardTwoWindEl = document.querySelector("#card-two-wind")
var cardTwoHumEl = document.querySelector("#card-two-hum")
var cardThreeTempEl = document.querySelector("#card-three-temp")
var cardThreeWindEl = document.querySelector("#card-three-wind")
var cardThreeHumEl = document.querySelector("#card-three-hum")
var cardFourTempEl = document.querySelector("#card-four-temp")
var cardFourWindEl = document.querySelector("#card-four-wind")
var cardFourHumEl = document.querySelector("#card-four-hum")
var cardFiveTempEl = document.querySelector("#card-five-temp")
var cardFiveWindEl = document.querySelector("#card-five-wind")
var cardFiveHumEl = document.querySelector("#card-five-hum")
var cardDay1El = document.querySelector("#day-1")
var cardDay2El = document.querySelector("#day-2")
var cardDay3El = document.querySelector("#day-3")
var cardDay4El = document.querySelector("#day-4")
var cardDay5El = document.querySelector("#day-5")


var cityHistory1;
var cityHistory2;
var cityHistory3;
var cityHistory4;
var cityHistory5;
var cityHistory6;
var cityHistory7;
var cityHistory8;





buttonEl.addEventListener("click", search);

function search() {
    // Obtain Longitude and Latitude values to be used in the next API, since it requires longitude and latitude values to obtain weather data
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + inputEl.value + '&appid=5f2d5d2083093f3a5669fa9be777a716')

    .then(response => response.json())
    .then(data => { 
        var cityLongitude = data['coord']['lon'];
        var cityLatitude = data['coord']['lat'];
        var cityName = data['name'];
        cityNameEl.innerHTML = "Forecast in " + cityName + ' for ' +moment().format("MMM Do YYYY");
        fiveDayForecastEl.innerHTML = 'Five-Day Forecast for ' + cityName

        // Obtain API data for Today's Forecast for selected city
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + cityLatitude +'&lon=' +cityLongitude+ '&units=metric&exclude=daily,hourly,minutely,alerts&appid=5f2d5d2083093f3a5669fa9be777a716')

        .then(response =>response.json())
        .then(data => {
            
            var cityTemp = Math.floor(data['current']['temp']);
            var cityWind = data['current']['wind_speed'];
            var cityHumidity = data['current']['humidity']
            var cityUV = data['current']['uvi']


            tempEl.innerHTML = 'Temperature = ' + cityTemp +'°C'
            windEl.innerHTML = 'Wind Speed = ' + cityWind + 'km/h'
            humidityEl.innerHTML = 'Humidity = ' + cityHumidity +'%'
            UVIndexEl.innerHTML = 'UV Index = ' + cityUV

           console.log(data)
        })
        });


        // Obtain API Data for 5-Day Forecast

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + inputEl.value + '&appid=5f2d5d2083093f3a5669fa9be777a716')

        .then(response => response.json())
        .then(data => {
            
            //Card One

            var cityTemp1 = data['list']['2']['main']['temp']
            var cityWind1 = data['list']['2']['wind']['speed']
            var cityHum1 = data['list']['2']['main']['humidity']

            cardOneEl.className = 'card-one-through-five'
            cardDay1El.innerHTML = moment().add(1, 'days').format('MMM DD YYYY');
            cardOneTempEl.innerHTML = 'Temp = ' + cityTemp1 + '°C';
            cardOneWindEl.innerHTML = 'Wind = ' + cityWind1 + 'km/h';
            cardOneHumEl.innerHTML = 'Humidity = ' + cityHum1 + '%';

            //Card Two
            var cityTemp2 = data['list']['10']['main']['temp']
            var cityWind2 = data['list']['10']['wind']['speed']
            var cityHum2 = data['list']['10']['main']['humidity']

            cardTwoEl.className = 'card-one-through-five'
            cardDay2El.innerHTML = moment().add(2, 'days').format('MMM DD YYYY');
            cardTwoTempEl.innerHTML = 'Temp = ' + cityTemp2 + '°C';
            cardTwoWindEl.innerHTML = 'Wind = ' + cityWind2 + 'km/h';
            cardTwoHumEl.innerHTML = 'Humidity = ' + cityHum2 + '%';

            //Card Three
            var cityTemp3 = data['list']['18']['main']['temp']
            var cityWind3 = data['list']['18']['wind']['speed']
            var cityHum3 = data['list']['18']['main']['humidity']

            cardThreeEl.className = 'card-one-through-five'
            cardDay3El.innerHTML = moment().add(3, 'days').format('MMM DD YYYY');
            cardThreeTempEl.innerHTML = 'Temp = ' + cityTemp3 + '°C';
            cardThreeWindEl.innerHTML = 'Wind = ' + cityWind3 + 'km/h';
            cardThreeHumEl.innerHTML = 'Humidity = ' + cityHum3 + '%';

            //Card Four            
            var cityTemp4 = data['list']['26']['main']['temp']
            var cityWind4 = data['list']['26']['wind']['speed']
            var cityHum4 = data['list']['26']['main']['humidity']

            cardFourEl.className = 'card-one-through-five'
            cardDay4El.innerHTML = moment().add(4, 'days').format('MMM DD YYYY');
            cardFourTempEl.innerHTML = 'Temp = ' + cityTemp4 + '°C';
            cardFourWindEl.innerHTML = 'Wind = ' + cityWind4 + 'km/h';
            cardFourHumEl.innerHTML = 'Humidity = ' + cityHum4 + '%';

            //Card Five
            var cityTemp5 = data['list']['32']['main']['temp']
            var cityWind5 = data['list']['32']['wind']['speed']
            var cityHum5 = data['list']['32']['main']['humidity']

            cardFiveEl.className = 'card-one-through-five'
            cardDay5El.innerHTML = moment().add(5, 'days').format('MMM DD YYYY');
            cardFiveTempEl.innerHTML = 'Temp = ' + cityTemp5 + '°C';
            cardFiveWindEl.innerHTML = 'Wind = ' + cityWind5 + 'km/h';
            cardFiveHumEl.innerHTML = 'Humidity = ' + cityHum5 + '%';

            


            console.log(data)

        })




}

var searchedCities = 0;

// Creating buttons for cities that have already been searched
buttonEl.addEventListener("click", function() {


    if (cityHistory1 == undefined && inputEl.value !== "") {
        cityHistory1 = document.createElement("button");
        cityHistory1.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory1.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory1);
    



   
    } else if (cityHistory2 == undefined){
    cityHistory2 = document.createElement("button");
    cityHistory2.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
    cityHistory2.className = 'history btn btn-primary'
    citiesListEl.appendChild(cityHistory2);



    } else if (cityHistory3 == undefined){
        cityHistory3 = document.createElement("button");
        cityHistory3.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory3.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory3);
    

    } else if (cityHistory4 == undefined){
        cityHistory4 = document.createElement("button");
        cityHistory4.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory4.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory4);
    
    } else if (cityHistory5 == undefined){
        cityHistory5 = document.createElement("button");
        cityHistory5.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory5.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory5);
    
    } else if (cityHistory6 == undefined){
        cityHistory6 = document.createElement("button");
        cityHistory6.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory6.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory6);
    
    } else if (cityHistory7 == undefined){
        cityHistory7 = document.createElement("button");
        cityHistory7.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory7.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory7);
    
    } else if (cityHistory8 == undefined){
        cityHistory8 = document.createElement("button");
        cityHistory8.innerHTML = inputEl.value.charAt(0).toUpperCase()+inputEl.value.slice(1);
        cityHistory8.className = 'history btn btn-primary'
        citiesListEl.appendChild(cityHistory8);
    
    } 

    cityHistory1.addEventListener("click", function() {
        inputEl.value = cityHistory1.innerHTML;
        search();
    })
    
    cityHistory2.addEventListener("click", function() {
        inputEl.value = cityHistory2.innerHTML;
        search();
    })

    cityHistory3.addEventListener("click", function() {
        inputEl.value = cityHistory3.innerHTML;
        search();
    })

    cityHistory4.addEventListener("click", function() {
        inputEl.value = cityHistory4.innerHTML;
        search();
    })

    cityHistory5.addEventListener("click", function() {
        inputEl.value = cityHistory5.innerHTML;
        search();
    })

    cityHistory6.addEventListener("click", function() {
        inputEl.value = cityHistory6.innerHTML;
        search();
    })

    cityHistory7.addEventListener("click", function() {
        inputEl.value = cityHistory7.innerHTML;
        search();
    })

    cityHistory8.addEventListener("click", function() {
        inputEl.value = cityHistory8.innerHTML;
        search();
    })


})






