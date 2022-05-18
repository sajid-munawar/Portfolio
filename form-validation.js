const form = document.getElementById('form');
const email = document.getElementById('email');
const small = email.parentNode.querySelector('small');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    small.innerText = 'Form not sent.Please enter email in lower case';
  } else if (email.value === email.value.toLowerCase()) small.innerText = '';
});

email.addEventListener('click', () => {
  small.innerText = '';
});
