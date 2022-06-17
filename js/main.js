// initial putting elements into variables
const button = document.querySelector('button');  // get the button
const img = document.querySelector('img'); // get the image
const question = document.getElementById('question'); // get the input question field

// start with Ask button hidden
button.style.display = 'none';

// check when keys are pushed
question.addEventListener('keyup', function() {
    if(question.value) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
})

button.addEventListener('click', function() {  // check when button is clicked
    ask();
})

function ask() {
    const randomValue = Math.ceil(Math.random()*20);
    const imageName = './images/magic8ball_' + randomValue + '.png';
    img.src = imageName;
}
