const fName = document.getElementById('fName');
const email = document.getElementById('email');
const message = document.getElementById('message');

const userData = {
  firstName: '',
  userEmail: '',
  userMessage: '',
};

if (!localStorage.getItem('userData')) {
  localStorage.setItem('userData', JSON.stringify(userData));
} else {
  const userData = JSON.parse(localStorage.getItem('userData'));
  fName.value = userData.firstName;
  email.value = userData.userEmail;
  message.value = userData.userMessage;
}

fName.addEventListener('change', (e) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  userData.firstName = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});

email.addEventListener('change', (e) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  userData.userEmail = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});

message.addEventListener('change', (e) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  userData.userMessage = e.target.value;
  localStorage.setItem('userData', JSON.stringify(userData));
});
