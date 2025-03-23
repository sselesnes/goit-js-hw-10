const formData = { email: '', message: '' };
const formFeedback = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

formFeedback.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

formFeedback.addEventListener('submit', event => {
  event.preventDefault();
  for (const key of Object.keys(formData)) {
    if (!event.target[key].value) {
      alert(`Fill please all fields`);
      return;
    }
  }
  console.log(formData);
  formFeedback.reset();
  localStorage.removeItem(localStorageKey);
});

window.addEventListener('load', () => {
  const formDataSaved = JSON.parse(localStorage.getItem(localStorageKey));
  if (formDataSaved) {
    Object.entries(formDataSaved).forEach(([key, value]) => {
      formFeedback[key].value = value;
      formData[key] = value;
    });
  }
});
