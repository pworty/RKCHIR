const form = document.querySelector('.panel');
const message = document.querySelector('.msg');
const answer = document.querySelector('.answer');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = answer.value === 'Да' ? 'Круто!' : 'Попробуй еще раз';
});
