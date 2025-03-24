import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const createPromiseForm = document.querySelector('.form');
createPromiseForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = createPromiseForm.elements.delay.value;
  const state = createPromiseForm.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        icon: ``,
        close: false,
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        icon: ``,
        close: false,
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
