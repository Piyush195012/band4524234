document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    document.querySelector('.next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    document.querySelector('.prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }
});
