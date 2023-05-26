const apikey="48acc405f87a23cbba6f6d4d8913d210";
const weatherDataEl= document.getElementById("weather-data");
const cityName=document.getElementById("city-input");
const formel= document.querySelector("form"); 
formel.addEventListener("submit",function(data){
    data.preventDefault();
    const cityValue=cityName.value;
    getWeatherData(cityValue);
});
async function getWeatherData(cityValue){
    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?
        q=${cityValue}&appid=${apikey}&units=metric`);
        const data= await response.json();
        console.log(data);
        if(!response.ok){
            throw new error("Network response was not ok");
        }
        const icon=data.weather[0].icon;
        const temperature=math.floor(data.main.temp);
        const description=data.weather[0].description;
        const windSpeed=data.wind.speed;
        const feelsLike=data.main.feels_like;
        const humidity=data.main.humidity;
       
       document.querySelector(".icon").innerHTML(`<img src="http://openweathermap.org/img/wn/${icon}.png> `);
       document.querySelector(
        ".temperature"
      ).textContent = `${temperature}°C`;
     
       document.querySelector(".description").textContent = description;
       const details = [
        `Feels like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}%`,
        `Wind speed: ${data.wind.speed} m/s`,
      ];
       
    }catch(error){
        
        weatherDataEl.querySelector(".icon").textContent = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent =
          "An error happened, please try again later";
    
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}