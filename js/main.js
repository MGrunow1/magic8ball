// initial putting elements into variables
const button = document.querySelector('button');  // get the button
const img = document.querySelector('img'); // get the image
const question = document.getElementById('question'); // get the input question field

// start with Ask button hidden
button.style.display = 'none';

// check when keys are pushed
question.addEventListener('keyup', function() {
    if(question.value) {
        button.style.display = 'block';  // show button
    } else {
        button.style.display = 'none';  // hide button
    }
})

button.addEventListener('click', function() {  // check when button is clicked
    // change image
    ask();

    // hide button until question is changed
    button.style.display = 'none';
})

function ask() {
    // no value for index 0
    const answerList = ['', 'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now','Concentrate and ask me again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
    const randomValue = Math.ceil(Math.random()*20);

    // set up images for fade transition
    const imageName = './images/magic8ball_' + randomValue + '.png';
    const overlay = document.querySelector('.overlay');

    // show animation overlay, and set background image
    overlay.classList.remove('fadeout');
    img.alt = 'magic changing';
    overlay.classList.add('fadein');
    overlay.style.opacity = 1;

    // pause to let fade-in finish for a bit, then fade to answer
    setTimeout(() => {
        img.src = imageName;
        img.alt = answerList[randomValue];
        overlay.classList.remove('fadein');
        overlay.classList.add('fadeout');
        overlay.style.opacity = 0;
        }, 4500);
}
