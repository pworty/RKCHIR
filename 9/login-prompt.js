const promptButton = document.querySelector('#login-prompt');

promptButton.addEventListener('click', () => {
    const login = prompt('Введите логин');
    if (login !== 'Админ') {
        alert('Я вас не знаю');
    } else {
        const password = prompt('Введите пароль');
        switch (password) {
            case '':
            case ' ':
            case null:
                alert('Отменено');
                break;
            case 'Я главный':
                alert('Здравствуйте!');
                break;

            default:
                alert('Неверный пароль');
        }
    }
})