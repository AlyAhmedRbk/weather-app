const apiKey = "69ddb14a815c4cae9a5101644241109";
const apiURL = "http://api.weatherapi.com/v1/";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const checkWeather = async(city) =>{
    const responce = await fetch(apiURL + `current.json?key=${apiKey}&q=${city}`);
    var data = await responce.json();

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".city").innerHTML = data.location.name;
    document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
    document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
    document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
    document.querySelector(".weather-type").innerHTML = data.current.condition.text;;
    const image = document.querySelector(".weather-icon");
    image.src = data.current.condition.icon;

    console.log(data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
