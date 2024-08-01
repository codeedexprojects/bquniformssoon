// init.js
document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdown = () => {
        const endDate = new Date("Aug 15, 2024 23:59:59").getTime();
        const now = new Date().getTime();
        const difference = endDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelector('.days').textContent = days;
        document.querySelector('.hours').textContent = hours;
        document.querySelector('.minutes').textContent = minutes;
        document.querySelector('.seconds').textContent = seconds;

        if (difference < 0) {
            clearInterval(timerInterval);
            document.querySelector('.countdown').innerHTML = "Launched!";
        }
    };

    const timerInterval = setInterval(countdown, 1000);
    countdown();

    // Form Submission
    document.getElementById('subscribe-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.email.value;

        fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Subscription successful!');
            this.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Subscription failed. Please try again.');
        });
    });
});
