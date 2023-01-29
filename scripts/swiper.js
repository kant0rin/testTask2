const swiper = new Swiper('.carousel__swiper', {

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    loop: true,
    autoplay: {
        delay: 3000
    }
});