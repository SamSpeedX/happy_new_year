function countdown() {
    const newYear = new Date('Jan 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = newYear - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.container').innerHTML = '<h1>Happy New Year!</h1><br><p>Simon wishng you happy new year, you are part of my famly</p><p>Wishing you all a fantastic new year filled with happiness and success!</p><p>happy 2025 my dear.</p>';
    }
}

const countdownInterval = setInterval(countdown, 1000);
countdown();
