const myButton = document.querySelector('button');
const image = document.querySelector('img')
const images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"]

myButton.addEventListener('click', changeImage);

function changeImage () {
    console.log("Hello from script file!");

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = images[randomIndex];
}