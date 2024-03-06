const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('current-weather-items')
const timeoneEl = document.getElementById('time-zone')
const country = document.getElementById('country')
const weatherForecastEl = document.getElementById('weather-forecast')
const currentTempEl = document.getElementById('current-temp')


const days = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday']
const months = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']

const API_KEY = '8d6f268a4bbb69cf1c23cae112d23275'

setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const hourIn12HF = hour > 12 ? hour%12 : hour
    let minute = time.getMinutes()
    minute = minute < 10 ? '0'+minute : minute
    const ampm = hour > 12 ? 'PM' : 'AM'
    
    timeEl.innerHTML = hourIn12HF + ":" + minute + " " + `<span id="am-pm">${ampm}</span>`
    dateEl.innerHTML = days[day] + ', ' + months[month] + ' ' + date

},1000)

getWeatherData()
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        // console.log(success)
        let {latitude,longitude} = success.coords

        // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        
    })
}