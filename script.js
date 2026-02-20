function updateTarkovClocks() {
    const acceleration = 7; 
    const msInDay = 24 * 60 * 60 * 1000;
    
    // Tiempo base acelerado
    const now = Date.now() * acceleration;

    const formatTime = (offset) => {
        const timeWithOffset = (now + (offset * 60 * 60 * 1000)) % msInDay;
        const totalSeconds = Math.floor(timeWithOffset / 1000);
        
        const h = Math.floor(totalSeconds / 3600) % 24;
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    document.getElementById('clock-left').innerText = formatTime(0);
    document.getElementById('clock-right').innerText = formatTime(12);
}

// Actualizar cada segundo (o cada 142ms para que se vea fluido por la aceleración)
setInterval(updateTarkovClocks, 142);