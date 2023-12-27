document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.querySelector('.button-sign').textContent = 
            content.style.display === "block" ? '+' : '-';

        content.style.display = content.style.display === "block" ? 'none' : 'block';
    });
});

document.getElementById('faqSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.accordion-item').forEach(item => {
        const question = item.querySelector('.accordion-button').textContent.toLowerCase();
        item.style.display = question.includes(term) ? 'block' : 'none';
    });
});