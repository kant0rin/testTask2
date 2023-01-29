const btns = document.querySelectorAll('.sale__btn')

btns.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('pressed')){
            return
        } else  {
            btns.forEach(e => {
                e.classList.remove('pressed')
            })
            e.classList.add('pressed')
        }
    })
})

let page = 1

const prev = document.querySelector('.sale__arows_prev')
prev.addEventListener('click', () => {
    if (prev.classList.contains('empty')){
        return
    } else {
        prev.classList.add('pressed')
        next.classList.contains('empty') ? next.classList.remove('empty') : null
        setTimeout(() => {
            prev.classList.remove('pressed')
        }, 300)
        page--
        page === 1 ? prev.classList.add('empty') : null
    }
})


const next = document.querySelector('.sale__arows_next')
next.addEventListener('click', () => {
    if (next.classList.contains('empty')) {
        return
    } else {

        page === 3 ? next.classList.add('empty') : null
        next.classList.add('pressed')
        prev.classList.contains('empty') ? prev.classList.remove('empty') : null
        setTimeout(()=> {
            next.classList.remove('pressed')
        }, 300)
        page++

    }
})

const itemSlider = new Swiper('.sale__item_swiper', {
    loop: true,
    autoplay: {
        delay: 3000
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
})

const saleSlider = new Swiper('.sale__slider', {
    loop: false,
    navigation: {
        nextEl: '.sale__arows_next',
        prevEl: '.sale__arows_prev',
    },
})

const likeBtns = document.querySelectorAll('.sale__item_like')
likeBtns.forEach( (e) => {
    e.addEventListener('click', () => {
        if (e.classList.contains('pressed')){
            e.classList.remove('pressed')
        } else {
            e.classList.add('pressed')
        }
    })
})
