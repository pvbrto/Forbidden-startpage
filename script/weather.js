
// Initial API call
const getWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-23.7050&lon=-46.7076&appid=${"9036c03eecb9f082f10c518e548ed443"}&units=metric`)
    const weather = await res.json()
    return weather
}

//regex to return the first number from the API's weather condition ID
const conditionChecker = async() => {
    const weather = await getWeather()
    const re = new RegExp(/\d/)
    const weatherCondition = weather.weather[0].id.toString()
    const firstInt = weatherCondition.match(re).toString()
    return firstInt
}


//Displays a different FontAwesome Icon on night/day rain/shine
const displayWeather = async () => {
    weather = await getWeather()
    weatherCondition = await conditionChecker()
    const date = new Date
    hours = date.getHours()
    if(hours >= 18 || hours <= 6){
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-moon"></i> <span>${weather.main.temp}°</span>`

        if(weatherCondition == 2 || weatherCondition == 3 || weatherCondition == 5) {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-moon-rain"></i> <span>${weather.main.temp} C</span>`
        }

    } 
    
    else {
        document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-sun"></i> <span>${weather.main.temp}°</span>`
        if(weatherCondition === 2 || weatherCondition === 3 || weatherCondition === 5) {
            document.getElementsByClassName("weather")[0].innerHTML = `<i class="fa-solid fa-cloud-sun-rain"></i> <span>${weather.main.temp} C</span>`
        }
    }
}

displayWeather()