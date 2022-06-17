
const button = document.querySelector('button');  // get the button
const img = document.querySelector('img'); // get the image

button.addEventListener('click', function() {  // check when button is clicked
    ask();
})

function ask() {
    const randomValue = Math.ceil(Math.random()*20);
    const imageName = './images/magic8ball_' + randomValue + '.png';
    img.src = imageName;
}
