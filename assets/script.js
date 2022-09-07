//determine the variables 
var weatherEl = document.querySelector('header')
var inputEl = document.querySelector('cityinput')
var btnEl = document.querySelector('btn');
var wrapper= document.querySelector('wrapper')
var city = document.querySelector('cityoutput')
var descrip = document.querySelector('humidity')
var temp = document.querySelector('temp')
var wind = document.querySelector('wind')
var wind = document.querySelector('index')
var city;
var api;
var wIcon = weather.querySelector("img"),
//var arrowBack = wrapper.querySelector("header i");

var APIKey = "12341234123412341234123412341234";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function timeTracker() {
  var date = moment().format('dddd, MMM Do YYYY,  h:mm:ss, a');
  //$("#currentDay").text(date.format('dddd, MMM Do YYYY,  h:mm:ss, a'));
  //moment().format('MMMM Do YYYY, h:mm:ss a');
  weatherEl.text(date);
}

btnEl.addEventListener("click", e =>{
    if(e.key == "Search" && inputField.value != ""){
        requestApi(btnEl.value);
    }
});

function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=your_api_key`;
    fetchData();
}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function fetchData(){
    inputEl.innerText = "Getting weather details...";
    inputEl.classList.add("pending");
    fetch(api).then(res => res.json()).then(result => weather(result)).catch(() =>{
        inputEl.innerText = "Something went wrong";
        inputEl.classList.replace("pending", "error");
    });
}

 function weather(info){
    if(info.cod == "404"){
        //inputEl.classList.replace("pending", "error");
        inputEl.innerText = `${inputEl.value} isn't a valid city name`;
    }else{
        const city = info.name;  
        //const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {temp, feels_like, humidity} = info.main;
            if(id == 800){
                wIcon.src = "icons/clear.svg";
            }else if(id >= 200 && id <= 232){
                wIcon.src = "icons/storm.svg";  
            }else if(id >= 600 && id <= 622){
                wIcon.src = "icons/snow.svg";
            }else if(id >= 701 && id <= 781){
                wIcon.src = "icons/haze.svg";
            }else if(id >= 801 && id <= 804){
                wIcon.src = "icons/cloud.svg";
            }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
                wIcon.src = "icons/rain.svg";
            }
            
            weather.querySelector(".temp .numb").innerText = Math.floor(temp);
            weather.querySelector(".weather").innerText = description;
            weather.querySelector(".location span").innerText = `${city}, ${country}`;
            weather.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
            weather.querySelector(".humidity span").innerText = `${humidity}%`;
           // infoTxt.classList.remove("pending", "error");
            inputEl.innerText = "";
            inputField.value = "";
            wrapper.classList.add("active");
}

weather.temperature = {
    unit : "celsius"
}


function cities() {

}

function forecast() {

}

//  AddEventListener
arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
})