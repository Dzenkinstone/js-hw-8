import throttle from 'lodash.throttle';
const form = document.querySelector('form');
let formData = {};
const KEY = 'feedback-form-state';
console.dir(form);

initForm();

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(KEY);
  form.elements.email.value = '';
  form.elements.message.value = '';
});

form.addEventListener('input', event => {
  let persistedData = localStorage.getItem(KEY);
  persistedData = persistedData ? JSON.parse(persistedData) : {};
  persistedData[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(persistedData));
});

function initForm() {
  let persistedData = localStorage.getItem(KEY);
  if (persistedData) {
    persistedData = JSON.parse(persistedData);
    console.log(persistedData);
    Object.entries(persistedData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
