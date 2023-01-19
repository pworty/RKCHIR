const likeButton = document.querySelector('#like');

likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('btn-primary');
});

document.addEventListener('mousemove', (event) => {
    const buttonPressed = likeButton.classList.contains('btn-primary');
    if (buttonPressed && !likeButton.matches(':hover')) {
        const likeImage = document.createElement('img');
        likeImage.src = 'like.png';
        likeImage.classList.add('like-image');
        likeImage.style.position = 'absolute';
        likeImage.style.top = `${event.clientY + 12}px`;
        likeImage.style.left = `${event.clientX + 12}px`;

        document.querySelector('body').append(likeImage);
    } else if (!buttonPressed) {
        const likeImages = document.querySelectorAll('.like-image');
        for (image of likeImages) {
            image.remove();
        }
    }
});