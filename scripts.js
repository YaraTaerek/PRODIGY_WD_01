window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const booksSection = document.getElementById('books');
    const booksOffsetTop = booksSection.offsetTop;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.scrollY >= booksOffsetTop) {
        navbar.classList.add('changed');
    } else {
        navbar.classList.remove('changed');
    }
});
