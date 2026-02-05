document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('Welcome to ClawdRepo! 🚀');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log('ClawdRepo loaded! 🦀');
