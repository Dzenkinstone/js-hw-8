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
  try {
    let savedString = localStorage.getItem(STORAGE_KEY);
    savedString = JSON.parse(savedString);
    if (savedString) {
      Object.entries(savedString).forEach(([name, value]) => {
        formData[name] = value;
        form.elements[name].value = value;
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  form.elements.email.value = '';
  form.elements.message.value = '';
  localStorage.clear();
  console.log(formData);
}