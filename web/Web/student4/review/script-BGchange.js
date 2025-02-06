document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorSelect = document.getElementById('background-color');
    const textColorSelect = document.getElementById('text-color');
    const listing = document.querySelector('.listing');

    backgroundColorSelect.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });

    textColorSelect.addEventListener('change', (event) => {
        listing.style.color = event.target.value;
    });
});
