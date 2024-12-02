const apiKey="47a3681ec820972f2e1360f68cb0ad5c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon");
 async function checkWeather(city){
    const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    let x=document.querySelector(".city");
    x.innerHTML=data.name;
    let y=document.querySelector(".temp");
    y.innerHTML=Math.round(data.main.temp)+ "°C";
    let z=document.querySelector(".humidity");
    z.innerHTML=data.main.humidity+ "%";
    let m=document.querySelector(".wind");
    m.innerHTML=data.wind.speed + "km/h";
    if(data.weather[0]=="Clouds"){
        weatherIcon.src="";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rainy.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="rain.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="foggy.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="cloudy.png";
    }
}
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})


