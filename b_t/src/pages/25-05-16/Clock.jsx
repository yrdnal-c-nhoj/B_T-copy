function formatTimeComponent(value) {
    return value.toString().split('');
}

function Clock() {
    const now = new Date();
    let h = now.getHours();
    h = h % 12 || 12; // 12-hour format, no 0

    const m = now.getMinutes();
    const s = now.getSeconds();

    renderTimeComponent('hours', formatTimeComponent(h));
    renderTimeComponent('minutes', formatTimeComponent(m));
    renderTimeComponent('seconds', formatTimeComponent(s));
}

function renderTimeComponent(id, digits) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Clear current images

    digits.forEach(d => {
        const img = document.createElement('img');
        img.src = `digits/${d}.png`;
        img.alt = d;
        container.appendChild(img);
    });
}

// Initial render
Clock();
setInterval(Clock, 1000);
