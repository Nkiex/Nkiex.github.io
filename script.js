function updateTarkovClocks() {
    const acceleration = 7; 
    const msInDay = 24 * 60 * 60 * 1000;
    
    // Tiempo base acelerado
    const now = Date.now() * acceleration;

    const formatTime = (offset) => {
        // Sumamos el offset de horas y aplicamos el módulo para mantenerlo en 24h
        const timeWithOffset = (now + (offset * 60 * 60 * 1000)) % msInDay;
        
        const totalSeconds = Math.floor(timeWithOffset / 1000);
        const h = Math.floor(totalSeconds / 3600) % 24;
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        // Retornamos el string formateado HH:MM:SS
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // Buscamos los elementos en el HTML
    const leftClock = document.getElementById('clock-left');
    const rightClock = document.getElementById('clock-right');

    if (leftClock && rightClock) {
        leftClock.innerText = formatTime(0);
        rightClock.innerText = formatTime(12);
    }
}

// Ejecutamos la función apenas carga y luego cada 142ms
updateTarkovClocks(); 
setInterval(updateTarkovClocks, 142);
