const form = document.getElementById('form');
const userEmail = document.getElementById('email');
const small = userEmail.parentNode.querySelector('small');

form.addEventListener('submit', (e) => {
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    e.preventDefault();
    small.innerText = 'Form not sent.Please enter email in lower case';
  } else if (userEmail.value === userEmail.value.toLowerCase()) small.innerText = '';
});

userEmail.addEventListener('click', () => {
  small.innerText = '';
});
