const api_key="006dc90052611add339ffbb72ceb140c";
const api_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let searchCityName=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");

//This is check weather function
async function checkWeather(city){
    const response=await fetch(api_url+ city +`&apikey=${api_key}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }
    else{
        let data=await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;  
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";  
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";  
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h"; 
        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display="block";
    
    }
    
  
    
    }

    searchCityName.addEventListener("keydown", function (e) {
    if (e.code === 'Enter') {
        checkWeather(searchCityName.value);

    }
}
)

    searchBtn.addEventListener("click",()=>{
        checkWeather(searchCityName.value)
    })
  
