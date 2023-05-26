const swiper = new Swiper("#banner .swiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1.8,
    spaceBetween: 30,
    slidesPerGroupSkip: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});