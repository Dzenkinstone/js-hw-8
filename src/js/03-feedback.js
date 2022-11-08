import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const KEY = 'feedback-form-state';

initForm();

form.addEventListener('submit', event => {
  event.preventDefault();
  try {
    let persistedData = localStorage.getItem(KEY);
    persistedData = persistedData ? JSON.parse(persistedData) : {};
    console.log(persistedData);
    localStorage.removeItem(KEY);
  } catch (error) {
    console.log(error);
  }
  event.target.reset();
});

form.addEventListener(
  'input',
  throttle(event => {
    try {
      let persistedData = localStorage.getItem(KEY);
      persistedData = persistedData ? JSON.parse(persistedData) : {};
      persistedData[event.target.name] = event.target.value;
      localStorage.setItem(KEY, JSON.stringify(persistedData));
    } catch (error) {
      console.log(error);
    }
  }, 500)
);

function initForm() {
  try {
    let persistedData = localStorage.getItem(KEY);
    if (persistedData) {
      persistedData = JSON.parse(persistedData);
      Object.entries(persistedData).forEach(([name, value]) => {
        form.elements[name].value = value;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
