const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSSNAME="hidden";
const USERNAME_KEY = "username";
//반드시 같아야하는 게 있다면, string 대문자로 해서 const 해두기

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText =`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSSNAME);
}

const savedUsername = localStorage.getItem (USERNAME_KEY);
if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}