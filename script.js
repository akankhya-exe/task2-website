document.addEventListener('DOMContentLoaded', () => {
    const cafeForm = document.getElementById('cafeForm');

    if (cafeForm) {
        cafeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            
            alert(`Thank you, ${name}! Your table for ${date} has been requested. We will email you shortly.`);
            cafeForm.reset();
        });
    }
});