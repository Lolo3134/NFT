$('.cards-flex').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    items: 2,
    nav: false,
    dots: false,

    responsive: {
        600: {
            items: 3
        }
    }
});