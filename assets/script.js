//determine the variables 
var weatherEl = document.querySelector('.header')
var currentDay = document.querySelector('#currentDay')
var form = document.querySelector("#address-form")
var inputEl = document.querySelector('#cityinput')
var btnEl = document.querySelector('.btn');
// var wrapper= document.querySelector('wrapper')
var cityoutputEl = document.querySelector('#cityoutput')
var humidityEl = document.querySelector('.humidity')
var tempEl = document.querySelector('.temperature')
var windEl = document.querySelector('.wind')
var indexEl = document.querySelector('.index')
var city;
var api;
var wIconEl  = document.querySelector(".image")

//var APIKey = "9b35244b1b7b8578e6c231fd7654c186";
//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function timeTracker() {
  var date = moment().format('dddd, MMM Do YYYY,  h:mm:ss, a');
  //$("#currentDay").text(date.format('dddd, MMM Do YYYY,  h:mm:ss, a'));
  //moment().format('MMMM Do YYYY, h:mm:ss a');
  weatherEl.text(date);
}

function convertion(val){
    return (val - 273).toFixed(2)
}

//'${weatherApiRooturl}/data/2.5/onecall?lat=${lat}&lon={ion}&units=imperial&exclude=minutely,hourly$appid=${APIKEY}'
var weatherApiRootUrl = 'https://api.openweathermap.org';
var APIKey = "9b35244b1b7b8578e6c231fd7654c186";


//This api link is where all the information will be collected
btnEl.addEventListener('click', weather);

function collectWeather(location) {
    var {lat} = location;
    var {lon} = location;
    city = location.name
    var apiUrl = (`${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIKey}`)
    //('https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid='+APIKey)
    fetch(apiUrl)
        .then(res => res.json())
        //.then(data => console.log(data))

        .then(data => {
            console.log(data)
             
                var city = data[0]['name']
                var humidity = data['humidity']
                var temp = data['temp']
                var wind = data['wind_speed']
                var index =  data['uvi']
                var wIcon = data['icon']
    //Now with the help of innerHTML it displays the information on the page.
                cityoutputEl.innerHTML = `Weather of <span> ${city}</span>`
                tempEl.innerHTML = `Temperature: <span>${ convertion(temp)} C</span>`
                humidityEl.innerHTML = `Humidity: <span>${humidity}<span>`
                windEl.innerHTML = `Wind Speed: <span>${wind} km/h<span>`
                indexEl.innerHTML = `UX index: <span>${index}}<span>`
                wIconEl.innerHTML = ` <span>${wIcon}<span>`
                localStorage.setItem("name",   JSON.stringify(city));
                localStorage.setItem("humidity", JSON.stringify(humidity));
                localStorage.setItem("temp", JSON.stringify(temp));
                localStorage.setItem("wind_speed", JSON.stringify(wind));
                localStorage.setItem("uvi", JSON.stringify(index));
                localStorage.setItem("icon", JSON.stringify(wIcon));
            }) 
    // //Condition is for when user doesnt input city name.
    //         .catch(err => alert('You entered Wrong city name'))  
    //         console.log(data)
        }; 

 function weather(e) {
    e.preventDefault()
    var search = inputEl.value;
    var apiUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${APIKey}`;
    console.log(apiUrl)

    fetch(apiUrl)
        .then(function (res) {
            return res.json();
        }) 
//entered wrong city 
        .then(function (data) {
            console.log(data)
            if (!data[0]) {
                alert("Location not found");
            } else {
                //appendHistory(search);
                collectWeather(data[0]);
            }
        }) 
        .catch(function (err) {
           // console.error(err);
        });  
}



// btnEl.addEventListener("click", e =>{
//     if(e.key == "Search" && inputField.value != ""){
//         requestApi(btnEl.value);
//     }
// });

// function requestApi(city){
//     api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=12341234123412341234123412341234`;
//     fetchData();
// }
// //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// function fetchData(){
//     inputEl.innerText = "Getting weather details...";
//     inputEl.classList.add("pending");
//     fetch(api).then(res => res.json()).then(result => weather(result)).catch(() =>{
//         inputEl.innerText = "Something went wrong";
//         inputEl.classList.replace("pending", "error");
//     });
// }


function cities() {
    var cities = JSON.parse(localStorage.getItem("city"));
}

// function forecast() {

// }


// //  AddEventListener
// arrowBack.addEventListener("click", ()=>{
//     wrapper.classList.remove("active");
//  })