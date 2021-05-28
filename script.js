var inputEl = document.querySelector("#input")
var buttonEl = document.querySelector("#button")
var citiesListEl = document.querySelector("#cities-list")


var cityHistory1;
var cityHistory2;
var cityHistory3;
var cityHistory4;
var cityHistory5;




buttonEl.addEventListener("click", function(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputEl.value+'&appid=5f2d5d2083093f3a5669fa9be777a716')

    .then(response => response.json())
    .then(data => console.log(data))
})


buttonEl.addEventListener("click", function() {


    if (cityHistory1 == undefined && inputEl.value !== "") {
        cityHistory1 = document.createElement("button");
        cityHistory1.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory1)
   
   
    } else if (cityHistory2 == undefined && inputEl.value !== cityHistory1.innerHTML) {
    cityHistory2 = document.createElement("button");
    cityHistory2.innerHTML = inputEl.value;
    citiesListEl.appendChild(cityHistory2)


    } else if (cityHistory3 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML) {
        cityHistory3 = document.createElement("button");
        cityHistory3.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory3)

    } else if (cityHistory4 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML && inputEl.value !== cityHistory3.innerHTML) {
        cityHistory4 = document.createElement("button");
        cityHistory4.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory4)
    } else if (cityHistory5 == undefined && inputEl.value !== cityHistory1.innerHTML && inputEl.value !== cityHistory2.innerHTML && inputEl.value !== cityHistory3.innerHTML && inputEl.value !== cityHistory4.innerHTML) {
        cityHistory5 = document.createElement("button");
        cityHistory5.innerHTML = inputEl.value;
        citiesListEl.appendChild(cityHistory5)
    }

    inputEl.value='';

})
