let is12HourFormat = true; // Default format is 12-hour

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Toggle between 12-hour and 24-hour format
    if (is12HourFormat && hours > 12) {
        hours -= 12;
    }

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${is12HourFormat ? (hours >= 12 ? 'PM' : 'AM') : ''}`;
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').innerHTML = `<span>${day}</span>, ${date}`;
}

// Toggle 12-hour and 24-hour format when the button is clicked
document.getElementById('toggleFormat').addEventListener('click', function () {
    is12HourFormat = !is12HourFormat;
    updateTime();
});

// Update the time when the page loads
window.addEventListener('load', updateTime);

// Update the time every second
setInterval(updateTime, 1000);

