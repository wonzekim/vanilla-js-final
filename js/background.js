const images = ["bp.jpg", "thor.jpg", "cm.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");
// createElement 이용해서 html에 넣을 img 를 만들기

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);
//append 마지막에 추가한다 prepend 맨 위에 추가한다