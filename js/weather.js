const API_KEY ="62838dd14c877a9015c7e7aa797af7d6"
//https://openweathermap.org/current 에서 얻은 url과 api key 통해 날씨 api 접근

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
      //fetch = 네트워크에서 리소스 가져오기. promise 라서 바로 반응하지 않음. console 말고 network 에서 가져오는 것 확인 가능
      //fetch.then(response) 로 작업 필요
      //html 에 div 로 "weather" 추가해주고, 불러오고 싶은 내용 const & innerText 로 넣기
}
function onGeoError(){
    alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);