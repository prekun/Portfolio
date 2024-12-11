// Add smooth scrolling to navigation links
alert('HI MY NAME IS PREMPREE LUNPILA');

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight active section in navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Add simple form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        form.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
