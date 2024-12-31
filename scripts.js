function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 5000);
}

function startBalloons() {
    setInterval(createBalloon, 3000);
}

function countdown() {
    const newYear = new Date('Jan 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000); 
    /*
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;*/
    
    if (1 == 1) {
        clearInterval(countdownInterval);
        document.querySelector('.container').innerHTML = '<h1>Happy New Year! 🎉🎆</h1><p><p>   
May 2025 bring you success, joy, and plenty of opportunities to grow your skills and achieve your goals. Cheers to a prosperous year ahead! 🥂</p>';
        startBalloons();
    }
}

const countdownInterval = setInterval(countdown, 100);
countdown();
