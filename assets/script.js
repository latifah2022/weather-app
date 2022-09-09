//determine the variables 
var weatherEl = document.querySelector('.header')
var currentDay = document.querySelector('#currentDay')
var inputEl = document.querySelector('.cityinput')
var btnEl = document.querySelector('.btn');
// var wrapper= document.querySelector('wrapper')
var city = document.querySelector('.cityoutput')
var humidity = document.querySelector('.humidity')
var temp = document.querySelector('.temperature')
var wind = document.querySelector('.wind')
var index = document.querySelector('.index')
var city;
var api;
//var wIcon = weather.querySelector("img")

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

btnEl.addEventListener('click', function(){
    //This api link is where all the information will be collected
    fetch('${weatherApiRootUrl}/data/2.5/onecall?lat=${lat}&lon={ion}&units=imperial&exclude=minutely,hourly$appid=${APIKEY}')
    //('https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid='+APIKey)
        .then(res => res.json())
        //.then(data => console.log(data))

        .then(data => {
            console.log(data)
             
                city = data['cityoutput']
                humidity = data['humidity']['0']
                temp = data['main']['temp']
                wind = data['wind']['speed']
                index =  data['index']
    //Now with the help of innerHTML it displays the information on the page.
                cityoutput.innerHTML=`Weather of <span>${cityoutput}<span>`
                tempature.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
                humidity.innerHTML = `Sky Conditions: <span>${humidity}<span>`
                wind.innerHTML = `Wind Speed: <span>${wind} km/h<span>`
                index.innerHTML = `UX index: <span>${index}<span>`
            })
    
    //Condition is for when user doesnt input city name.
            .catch(err => alert('You entered Wrong city name'))  
            console.log(data)
        })  

        function weather() {

        }



        // fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputEl.value+'&appid='+APIKey)
        // .then(res => res.json())

        //  //.then(data => console.log(data))

        // .then(data => {
        //     console.log(data)
        // })







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

// function weather() {

// }



// function cities() {

// }

// function forecast() {

// }


// //  AddEventListener
// arrowBack.addEventListener("click", ()=>{
//     wrapper.classList.remove("active");
//  })