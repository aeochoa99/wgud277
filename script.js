const firstName = document.querySelector('#fname');

const lastName = document.querySelector('#lname');

const userEmail = document.querySelector('#email');

const emailVerification = document.querySelector('#emailverification');

const message = document.querySelector('#message');

const submitButton = document.querySelector('input[type="submit"]');

const textArea = document.querySelector('#question');

function inputVerification() {
    if(firstName.value === '' ||
        lastName.value === ''||
        userEmail.value === '' || 
        emailVerification.value === '' ||
        textArea.value === '') {
            message.textContent = 'Please verify all fields are filled out.';
        } else if (userEmail.value !== emailVerification.value) {
            message.textContent = 'Please verify emails match.'
        } else {
            message.textContent = 'Thank you for reaching out.'
        }
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    inputVerification();
});
