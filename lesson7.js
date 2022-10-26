new Swiper(".image_slider",{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})
