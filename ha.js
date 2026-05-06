const envelope = document.getElementById('envelope');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
    
    if (envelope.classList.contains('open')) {
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 200);
        }
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 250 + 'px';
    heart.style.top = '50px';
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}
