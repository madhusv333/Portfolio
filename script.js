document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.download-btn');

    downloadButton.addEventListener('click', () => {
        // Track download count or other interactions
        console.log('Resume downloaded');
    });
});

document.getElementById('mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
