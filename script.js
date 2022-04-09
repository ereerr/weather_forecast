let key = '0884e347b20ea2a619eebbbd8a9e6eb1'
let city = 'Ставрополь'
let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`



let temp, feelslike, decs,wind, icon
let l_temp = document.querySelector('#l_temp')
let l_feelsLike = document.querySelector('#l_feelsLike')
let l_wind = document.querySelector('#l_wind')
let l_desc = document.querySelector('#l_desc')
let l_icon = document.querySelector('#icon')


let inputCity = document.querySelector('#inputCity')
inputCity.addEventListener('change', GetData)

function GetData(){
SetUrl()
    fetch(url)
        .then(data=>{
            console.log(data)
            if(data.ok){
                data.json()
                    .then(data=>{
                        let temp = data['main']['temp']
                        let feelsLike = data['main']['feels_like']
                        let description = data['weather'][0]['description']
                        let wind = data['wind']['speed']
                        let icon = data['weather'][0]['icon']
                        getDataWeather(temp,feelsLike,description,wind,icon)
                    })
            }
        })
}
function getDataWeather(temp, feelsLike, description, wind, icon){
    console.log(temp, feelsLike, description, wind, icon)
   l_temp.innerHTML = 'Температура: ' + temp + '&deg;'
   l_feelsLike. innerHTML = 'Ощущается как: ' + feelsLike + '&deg;'
   l_desc.textContent = description
   l_wind.textContent = 'Скорость ветра: ' + wind + 'м/с'
   l_icon.src = `http://openweathermap.org/img/wn/${icon}@4x.png`
}
function SetUrl(){
    city = inputCity.value
url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
}