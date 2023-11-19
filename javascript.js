const apiKey = "a61e9404774421141c06e353e2c8b9f3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".img-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + `&units=metric`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Humidity") {
            weatherIcon.src = "img/humidity.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/Snow.png";
        }
        else if (data.weather[0].main == "Wind") {
            weatherIcon.src = "img/wind.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }

}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
