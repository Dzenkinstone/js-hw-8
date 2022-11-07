import throttle from 'lodash.throttle';
const form = document.querySelector('form');
console.dir(form);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onKeyboardPress, 500));
form.addEventListener('submit', onFormSubmit);
populateInput();

function onKeyboardPress(event) {
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput() {
  const savedString = localStorage.getItem(STORAGE_KEY);
  const parsedString = JSON.parse(savedString);
  if (parsedString) {
    form[0].value = parsedString.email;
    form[1].value = parsedString.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  localStorage.clear();
  form[0].value = '';
  form[1].value = '';
  console.log({ email: '', message: '' });
}
