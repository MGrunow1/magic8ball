
const button = document.querySelector('button');  // get the button

questionInput.addEventListener('input', function() {  // check when something is input
    p.innerHTML = '';  // clear any previous answer
})

button.addEventListener('click', function() {  // check when button is clicked
    p.innerHTML = 'Maybe';  // answer
})
