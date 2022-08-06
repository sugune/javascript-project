const password = document.getElementById('password');
const error = document.getElementById('error');
const form = document.querySelector('form');
const mame = document.getElementById('name');

form.addEventListener('submit', (e) => {
  let message = [];
  if (password.value.length <= 5) {
    e.preventDefault;
    message.push('password must be more than 5 characters');
  }
  if (password.value.length >= 20) {
    e.preventDefault;
    message.push('password must be less than 20 characters');
  }
  if (password.value.toLowerCase() === 'password') {
    e.preventDefault;
    message.push('password must not be password');
  }
  if (mame.value === '' || password.value === null) {
    message.push('please dont leave them empty');
  }
  if (message.length > 0) {
    e.preventDefault();
    error.textContent = message.join('');
  }
});