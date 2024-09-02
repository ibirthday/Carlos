const countdownInterval = setInterval(updateCountdown, 1000);
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const current_date = new Date();
    const selected_date = new Date(`${current_date.getFullYear()}-09-02.`)
    
    if (selected_date - current_date <= 0) {
        selected_date.setFullYear(current_date.getFullYear() + 1)
    }
    const timeDifference = selected_date - current_date;

    if (`${current_date.getDay()}-${current_date.getMonth()}-${current_date.getFullYear()}` === `${selected_date.getDay()}-${selected_date.getMonth()}-${selected_date.getFullYear()}`) {
        countdownElement.textContent = '¡Feliz Cumpleaños Carlos!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        if (days == 1 && hours == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minuto, ${seconds} segundo`;
        } else if (hours == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minuto, ${seconds} segundo`;
        } else if (days == 1 && hours == 1 && minutes == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minuto, ${seconds} segundos`;
        } else if (days == 1 && hours == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minutos, ${seconds} segundo`;
        } else if (days == 1 && minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minuto, ${seconds} segundo`;
        } else if (days == 1 && hours == 1) {
            countdownElement.textContent = `${days} día, ${hours} hora, ${minutes} minutos, ${seconds} segundos`;
        } else if (days == 1 && minutes == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minuto, ${seconds} segundos`;
        } else if (days == 1 && seconds == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minutos, ${seconds} segundo`;
        } else if (hours == 1 && minutes == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minuto, ${seconds} segundos`;
        } else if (hours == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minutos, ${seconds} segundo`;
        } else if (minutes == 1 && seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minuto, ${seconds} segundo`;
        } else if (seconds == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundo`;
        } else if (minutes == 1) {
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minuto, ${seconds} segundos`;
        } else if (hours == 1) {
            countdownElement.textContent = `${days} días, ${hours} hora, ${minutes} minutos, ${seconds} segundos`;
        } else if (days == 1) {
            countdownElement.textContent = `${days} día, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        } else{
            countdownElement.textContent = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
        }

    }
}

var audio = new Audio('song2.mp3');
var botonReproducir = document.getElementById('reproducir');

botonReproducir.addEventListener('click', function() {
    audio.play();
});
