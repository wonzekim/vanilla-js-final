const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    //string()으로 감싸줌으로써 "00" 텍스트로 인식하게끔 바꿔줌
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock()
//1초 기다리지 않고 refresh 되자마자 바로 clock 시작하게끔 한번 불러줌
setInterval(getClock, 1);