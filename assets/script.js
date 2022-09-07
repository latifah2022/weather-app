//determine the variables 
var weatherEl = document.querySelector('header')
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#btn');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#humidity')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var wind = document.querySelector('#index')
var city;
var APIKey = "12341234123412341234123412341234";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

function timeTracker() {
  var date = moment().format('dddd, MMM Do YYYY,  h:mm:ss, a');
  //$("#currentDay").text(date.format('dddd, MMM Do YYYY,  h:mm:ss, a'));
  //moment().format('MMMM Do YYYY, h:mm:ss a');
  weatherEl.text(date);
}

function timeTracker() {
    var timeNow = moment().hour();
 }

//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function weather() {

}

weather.temperature = {
    unit : "celsius"
}


function cities() {

}

function forecast() {

}

//addEventListener