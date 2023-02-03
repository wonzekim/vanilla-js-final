const quotes = [
    {
        quote: "Frankly, my dear, I don't give a damn.",
        film: "Gone with the Wind",
    },
    {
        quote: "If we can’t accept limitations, then we’re no better than the bad guys.",
        film: "- Iron Man",
    },
    {
        quote: "With great power comes great responsibility.",
        film: "- Spiderman",
    },
    {
        quote: "I want to choose my own path. Live in the moment.",
        film: "- Thor",
    },
    {
        quote: "Arrogance and fear keep you from learning the simplest and most significant lesson of all.",
        film: "- Doctor Strange",
    },
    {
        quote: "I can do this all day.",
        film: "- Captain America",
    },
    {
        quote: "We can’t do this alone. We need you.",
        film: "- Carol Danvers",
    },
    {
        quote: "It’s still you inside of it.",
        film: "- Betty Ross",
    },
    {
        quote: "You are the light of my life, my precious son, my little Star-Lord.",
        film: "- Meredith Quill",
    },
    {
        quote: "It’s hard for a good man to be a king.",
        film: "- Black Panther",
    }
];

const quote = document.querySelector("#quote span:first-child");
const film = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
film.innerText = todaysQuote.film;

//RANDOMNESS 
//Math.random()*10 10이내 랜덤 값을 줌, 0와 n사이에 값을 원한다면 *n 곱하기 하면됨
//Math.round() 반올림값
//Math.ceil() 올림값
//Math.floor() 내림값
